"use client";

import React from "react";

type State =
  | { status: "idle"; message?: string }
  | { status: "loading"; message?: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function WaitlistForm({ buttonText = "Join Waitlist" }: { buttonText?: string }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [platform, setPlatform] = React.useState<"iOS" | "Android" | "">("");
  const [state, setState] = React.useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState({ status: "loading" });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, platform })
      });
      const json = (await res.json()) as { ok: boolean; message: string };
      if (!res.ok || !json.ok) throw new Error(json?.message || "Something went wrong.");
      setName("");
      setEmail("");
      setPlatform("");
      setState({ status: "success", message: json.message });
    } catch (err) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "Something went wrong."
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex w-full flex-col gap-3">
        {/* Full Name Field */}
        <div className="relative">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            placeholder="Enter your full name"
            className="h-12 w-full rounded-xl bg-white/5 px-4 text-white placeholder:text-white/35 ring-1 ring-white/10 outline-none transition focus:ring-2 focus:ring-cyan-400/40"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter your email"
            className="h-12 w-full rounded-xl bg-white/5 px-4 text-white placeholder:text-white/35 ring-1 ring-white/10 outline-none transition focus:ring-2 focus:ring-cyan-400/40"
          />
        </div>

        {/* Platform Dropdown */}
        <div className="relative">
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value as "iOS" | "Android" | "")}
            required
            className="h-12 w-full rounded-xl bg-white/5 px-4 text-white ring-1 ring-white/10 outline-none transition focus:ring-2 focus:ring-cyan-400/40 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              paddingRight: "2.5rem"
            }}
          >
            <option value="" disabled className="bg-[#05060A] text-white">
              Select your platform
            </option>
            <option value="iOS" className="bg-[#05060A] text-white">
              iOS
            </option>
            <option value="Android" className="bg-[#05060A] text-white">
              Android
            </option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          disabled={state.status === "loading"}
          className="group relative h-12 w-full rounded-xl bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 px-5 font-semibold text-black shadow-[0_16px_60px_rgba(56,189,248,0.3)] ring-1 ring-white/10 transition hover:brightness-110 hover:shadow-[0_20px_80px_rgba(56,189,248,0.4)] disabled:opacity-60 sm:px-6"
        >
          <span className="inline-flex items-center justify-center gap-2">
            {state.status === "loading" ? "Submitting..." : buttonText}
            {!buttonText.includes("→") && (
              <span className="transition group-hover:translate-x-0.5">→</span>
            )}
          </span>
        </button>
      </div>

      {state.status === "success" ? (
        <p className="mt-3 text-sm text-emerald-300/90">{state.message}</p>
      ) : state.status === "error" ? (
        <p className="mt-3 text-sm text-rose-300/90">{state.message}</p>
      ) : (
        <p className="mt-3 text-xs text-white/40">No signup required • Get notified when we launch</p>
      )}
    </form>
  );
}
