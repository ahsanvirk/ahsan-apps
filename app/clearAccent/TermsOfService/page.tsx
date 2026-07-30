import type { Metadata } from "next";
import Link from "next/link";
import { ClearAccentSubpage } from "@/components/ClearAccentSubpage";

export const metadata: Metadata = {
  title: "Terms of Service — Clear Accent",
  description: "Terms of Service for Clear Accent by AhsanApps."
};

const contactEmail = "contact@ahsan-apps.com";

export default function TermsOfServicePage() {
  return (
    <ClearAccentSubpage title="Terms of Service">
      <p>Last updated: July 30, 2026</p>

      <h2 className="pt-2 text-xl font-semibold text-white">Agreement</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the Clear Accent mobile app
        (iOS/Android) and related services operated by AhsanApps (&quot;we,&quot; &quot;us,&quot;
        or &quot;our&quot;). By using Clear Accent, you agree to these Terms.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">The Service</h2>
      <p>
        Clear Accent is an AI-powered American accent practice app. It provides pronunciation
        assessment, guided practice, and an AI Coach to help you improve your accent over time.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Accounts</h2>
      <p>
        You must provide accurate registration information when creating an account. You are
        responsible for maintaining the security of your account and for all activity that occurs
        under it.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Subscriptions &amp; Billing</h2>
      <p>
        Clear Accent offers Clear Accent Premium auto-renewable subscriptions with Weekly,
        Monthly, and Yearly billing periods.
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          Payment is charged to your Apple ID (iOS) or Google Play account (Android) at
          confirmation of purchase.
        </li>
        <li>
          Subscriptions automatically renew unless canceled at least 24 hours before the end of
          the current billing period.
        </li>
        <li>
          Your account will be charged for renewal within 24 hours before the current period
          ends.
        </li>
        <li>
          You can manage or cancel your subscription at any time: on iOS, go to Settings → Apple
          ID → Subscriptions; on Android, use Google Play subscription settings.
        </li>
        <li>
          Prices are shown in the app and on the App Store or Google Play at the time of
          purchase.
        </li>
        <li>
          If a free trial is offered, it converts to a paid subscription unless you cancel before
          the trial ends.
        </li>
      </ul>

      <h2 className="pt-2 text-xl font-semibold text-white">Acceptable Use</h2>
      <p>
        You agree not to misuse Clear Accent, use it for any unlawful purpose, or attempt to
        disrupt the service or its infrastructure.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">AI Disclaimer</h2>
      <p>
        AI-generated feedback in Clear Accent is intended for learning and practice only. It is
        not medical advice, speech therapy, or professional guidance. Always consult a qualified
        professional for clinical or therapeutic needs.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Intellectual Property</h2>
      <p>
        The Clear Accent name, branding, content, and related materials are owned by AhsanApps
        or its licensors and may not be used without permission.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Privacy</h2>
      <p>
        Your use of Clear Accent is also governed by our{" "}
        <Link
          href="/clearAccent/PrivacyPolicy"
          className="font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          Privacy Policy
        </Link>
        .
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Disclaimer of Warranties</h2>
      <p>
        Clear Accent is provided &quot;as is&quot; and &quot;as available&quot; without warranties
        of any kind, whether express or implied, to the fullest extent permitted by applicable
        law.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, AhsanApps is not liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of profits, data, or
        goodwill, arising from your use of Clear Accent. Our total liability for any claim related
        to the service is limited to the amount you paid us in the twelve months before the
        claim arose, or one hundred dollars (USD), whichever is greater.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use of Clear Accent after changes
        are posted means you accept the updated Terms.
      </p>

      <h2 className="pt-2 text-xl font-semibold text-white">Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
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
