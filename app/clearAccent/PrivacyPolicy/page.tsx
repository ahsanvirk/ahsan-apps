import type { Metadata } from "next";
import { ClearAccentSubpage } from "@/components/ClearAccentSubpage";

export const metadata: Metadata = {
  title: "Privacy Policy — Clear Accent",
  description: "Privacy Policy for Clear Accent by AhsanApps."
};

const contactEmail = "contact@ahsan-apps.com";

export default function PrivacyPolicyPage() {
  return (
    <ClearAccentSubpage title="Privacy Policy">
      <p>Last updated: July 30, 2026</p>

      <h2 className="pt-2 text-xl font-semibold text-white">Introduction</h2>
      <p>
        AhsanApps (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates Clear Accent. This
        Privacy Policy explains how we collect, use, and protect information when you use the Clear
        Accent mobile app (iOS/Android) and related services.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Information We Collect</h2>
      <p>When you use Clear Accent, we may collect:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Name and email address</li>
        <li>Account ID</li>
        <li>Subscription status</li>
        <li>Voice recordings you submit for pronunciation practice</li>
        <li>Accent scores and pronunciation feedback</li>
        <li>Practice and onboarding preferences</li>
        <li>Device information, if applicable (for example, to improve app performance)</li>
      </ul>

      <h2 className="pt-2 text-xl font-semibold text-white">How We Use Information</h2>
      <p>We use your information to:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Provide pronunciation feedback and accent scores</li>
        <li>Deliver AI coaching and personalized practice</li>
        <li>Track your progress over time</li>
        <li>Manage subscriptions and account access</li>
        <li>Improve app performance and reliability</li>
      </ul>

      <h2 className="pt-2 text-xl font-semibold text-white">Voice Recordings</h2>
      <p>
        When you practice pronunciation, audio is sent to our servers for analysis. Clear Accent
        does not maintain a permanent on-device library of your recordings. Accent scores and
        practice history are retained in your account so you can track progress.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">AI Processing</h2>
      <p>
        Clear Accent uses third-party services to provide core features. These providers process
        data only as needed to operate the service:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong className="text-white/90">Azure Speech</strong> — pronunciation assessment
        </li>
        <li>
          <strong className="text-white/90">Azure OpenAI</strong> — coaching feedback
        </li>
        <li>
          <strong className="text-white/90">ElevenLabs</strong> — AI Coach voice sessions
        </li>
        <li>
          <strong className="text-white/90">Supabase</strong> — authentication, profile, and
          subscription status
        </li>
        <li>
          <strong className="text-white/90">Render</strong> — API hosting
        </li>
      </ul>
      <p>
        We do not sell your data or use it for cross-app advertising or tracking.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share information with service providers
        only as needed to run Clear Accent, including:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Apple and Google (for in-app subscription payments)</li>
        <li>AI and speech providers (for pronunciation assessment and coaching)</li>
        <li>Hosting and authentication providers (for account and infrastructure services)</li>
      </ul>

      <h2 className="pt-2 text-xl font-semibold text-white">Tracking</h2>
      <p>
        We do not track users across apps or websites for advertising purposes. We do not use
        your data for tracking as defined by Apple.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Data Retention</h2>
      <p>
        We keep your information while your account is active. When you request account deletion,
        we delete your personal data in accordance with our retention practices, except where
        retention is required by law.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Your Rights</h2>
      <p>
        You can delete your account at any time from Settings in the Clear Accent app. For access
        or deletion requests, contact us at{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          {contactEmail}
        </a>
        .
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Children&apos;s Privacy</h2>
      <p>
        Clear Accent is not directed at children under 13. If you believe a child under 13 has
        submitted personal information, please contact us at{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          {contactEmail}
        </a>
        .
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Security</h2>
      <p>
        We use reasonable safeguards to protect your information. However, no method of
        transmission or storage is 100% secure.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Contact</h2>
      <p>
        Questions about this Privacy Policy? Email{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          {contactEmail}
        </a>
        .
      </p>
    </ClearAccentSubpage>
  );
}
