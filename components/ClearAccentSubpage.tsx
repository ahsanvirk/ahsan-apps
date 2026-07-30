import Image from "next/image";
import Link from "next/link";

export function ClearAccentSubpage({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg-950 text-white">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 noise opacity-[0.18]" />

      <div className="relative mx-auto max-w-3xl px-5 pb-20">
        <header className="flex items-center justify-between py-7">
          <Link href="/clearAccent" className="flex items-center gap-3 transition hover:opacity-90">
            <div className="relative h-8 w-8 overflow-hidden rounded-xl ring-1 ring-white/10">
              <Image src="/screenshots/logo.png" alt="Clear Accent logo" fill className="object-cover" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight">Clear Accent</span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-white/60 sm:flex">
            <Link className="transition hover:text-white" href="/clearAccent#features">
              Features
            </Link>
            <Link className="transition hover:text-white" href="/clearAccent#join">
              Join Waitlist
            </Link>
            <Link className="transition hover:text-white" href="/clearAccent/Support">
              Support
            </Link>
            <Link className="transition hover:text-white" href="/clearAccent/PrivacyPolicy">
              Privacy Policy
            </Link>
            <Link className="transition hover:text-white" href="/clearAccent/TermsOfService">
              Terms of Service
            </Link>
          </nav>
        </header>

        <h1 className="mt-10 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-white/70">{children}</div>
      </div>
    </main>
  );
}
