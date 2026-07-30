import type { Metadata } from "next";
import { ClearAccentSubpage } from "@/components/ClearAccentSubpage";

export const metadata: Metadata = {
  title: "Support — Clear Accent",
  description: "Get support for Clear Accent from AhsanApps."
};

export default function SupportPage() {
  return (
    <ClearAccentSubpage title="Support">
      <p>
        Need help with Clear Accent? We&apos;re happy to hear from you.
      </p>
      <p>
        Email us at{" "}
        <a
          href="mailto:contact@ahsan-apps.com"
          className="font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          contact@ahsan-apps.com
        </a>
        .
      </p>
      <p className="text-sm text-white/45">
        We typically respond within 1–2 business days.
      </p>
    </ClearAccentSubpage>
  );
}
