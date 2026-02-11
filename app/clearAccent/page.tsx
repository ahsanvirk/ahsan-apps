import Image from "next/image";
import Script from "next/script";
import { IPhoneFrame } from "@/components/IPhoneFrame";
import { WaitlistForm } from "@/components/WaitlistForm";

function GradientWord({
  children,
  from,
  via,
  to
}: {
  children: React.ReactNode;
  from: string;
  via: string;
  to: string;
}) {
  return (
    <span className={`bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent`}>
      {children}
    </span>
  );
}

function GlowBlobs() {
  return (
    <>
      <div className="pointer-events-none absolute left-[10%] top-[8%] h-[420px] w-[420px] rounded-full bg-cyan-500/18 blur-[90px]" />
      <div className="pointer-events-none absolute right-[10%] top-[12%] h-[520px] w-[520px] rounded-full bg-purple-500/16 blur-[110px]" />
      <div className="pointer-events-none absolute left-[28%] bottom-[8%] h-[520px] w-[520px] rounded-full bg-fuchsia-500/14 blur-[120px]" />
    </>
  );
}

export default function Page() {
  return (
    <>
      {/* Paste this right before your closing </head> tag */}
      <Script id="mixpanel-clearaccent" strategy="beforeInteractive">
        {`(function(f,b){
  if(!b.__SV){
    var e,g,i,h; window.mixpanel=b; b._i=[];
    b.init=function(e,f,c){
      function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}} 
      var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];
      a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};
      a.people.toString=function(){return a.toString(1)+".people (stub)"};
      i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders start_session_recording stop_session_recording people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
      for(h=0;h<i.length;h++)g(a,i[h]);
      var j="set set_once union unset remove delete".split(" ");
      a.get_group=function(){function b(c){d[c]=function(){a.push([e,[c].concat(Array.prototype.slice.call(arguments,0))])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),f=0;f<j.length;f++)b(j[f]);return d};
      b._i.push([e,f,c])
    };
    b.__SV=1.2;
    e=f.createElement("script"); e.type="text/javascript"; e.async=!0;
    e.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
    g=f.getElementsByTagName("script")[0]; g.parentNode.insertBefore(e,g);
  }
})(document,window.mixpanel||[]);

mixpanel.init('73e0b052cc708f5c829e604fdda7d4ed', {
  autocapture: true,
  record_sessions_percent: 100,
  ignore_dnt: true,
  debug: true,
  loaded: function (mp) {
    if (mp && mp.track_pageview) mp.track_pageview();
    else if (mp && mp.track) mp.track('Page View');
  }
});`}
      </Script>

      <main className="relative min-h-screen overflow-hidden bg-bg-950" suppressHydrationWarning>
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 noise opacity-[0.18]" />
        <GlowBlobs />

        <div className="relative mx-auto max-w-6xl px-5">
          {/* Nav */}
          <header className="flex items-center justify-between py-7">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-xl ring-1 ring-white/10">
                <Image src="/screenshots/logo.png" alt="Clear Accent logo" fill className="object-cover" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight">Clear Accent</span>
            </div>

            <nav className="hidden items-center gap-7 text-sm text-white/60 sm:flex">
              <a className="transition hover:text-white" href="#features">
                Features
              </a>
              <a className="transition hover:text-white" href="#join">
                Join Waitlist
              </a>
            </nav>
          </header>

          {/* Hero */}
          <section className="grid items-center gap-12 pb-20 pt-10 lg:grid-cols-2 lg:gap-10 lg:pb-28 lg:pt-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/60 ring-1 ring-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-300/90" />
                Early access coming soon
              </div>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Get your{" "}
                <GradientWord from="from-cyan-300" via="via-emerald-300" to="to-purple-400">
                  Corporate Accent Score™
                </GradientWord>{" "}
                in 15 seconds
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                See how your voice lands in U.S. corporate meetings. Get instant feedback on{" "}
                <span className="text-cyan-300">consonant clarity</span>,{" "}
                <span className="text-purple-300">vowel precision</span>, and{" "}
                <span className="text-emerald-300">intonation patterns</span>—so you sound confident
                and credible.
              </p>

              <div id="join" className="mt-8 max-w-xl rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <WaitlistForm buttonText="Join Waitlist →" />
              </div>

              <p className="mt-3 text-xs text-white/40">
                Join thousands of professionals waiting to transform their corporate voice
              </p>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative flex flex-col items-center gap-4 sm:flex-row">
                <IPhoneFrame
                  src="/screenshots/Screenshot2.png"
                  alt="Clear Accent — Recording Prompt"
                  priority
                  className="translate-y-0 sm:-translate-y-2"
                  animationDelay={0}
                />
                <IPhoneFrame
                  src="/screenshots/Screenshot3.png"
                  alt="Clear Accent — Corporate Accent Score"
                  className="hidden sm:block sm:translate-y-4"
                  animationDelay={1}
                />
              </div>
            </div>
          </section>

          {/* Science-backed section */}
          <section className="pb-24">
            <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 shadow-glow md:p-10">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="rounded-2xl bg-gradient-to-b from-white/6 to-white/3 p-6 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white/80 mb-4">Voice Clarity vs Corporate Impact</div>
                  <div className="relative h-48 rounded-xl bg-gradient-to-br from-cyan-500/10 via-purple-500/8 to-fuchsia-500/10 ring-1 ring-white/10 overflow-hidden">
                    {/* Simple chart visualization */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>
                      {/* Chart area fill */}
                      <path
                        d="M 0 180 Q 100 150 200 100 T 400 40 L 400 200 L 0 200 Z"
                        fill="url(#chartGradient)"
                      />
                      {/* Chart line */}
                      <path
                        d="M 0 180 Q 100 150 200 100 T 400 40"
                        stroke="url(#chartGradient)"
                        strokeWidth="3"
                        fill="none"
                      />
                      {/* 15-second highlight line */}
                      <line x1="150" y1="0" x2="150" y2="200" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                      <circle cx="150" cy="120" r="4" fill="#10b981" />
                      <text x="155" y="115" fill="#10b981" fontSize="12" fontWeight="600">15s</text>
                    </svg>
                  </div>
                  <div className="mt-4 flex gap-4 text-xs text-white/50">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      Optimal Zone
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-purple-300" />
                      Diminishing Returns
                    </span>
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/15 px-4 py-2 text-xs text-purple-200 ring-1 ring-purple-400/20">
                    <span className="text-purple-300">💡</span>
                    Science-backed
                  </div>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    The <span className="text-emerald-300">15-second</span> sweet spot
                  </h2>
                  <p className="mt-4 text-white/65 leading-relaxed">
                    Research shows that <span className="text-emerald-300 font-semibold">15 seconds of speech</span> is
                    enough to assess clarity, authority, and credibility. Our AI analyzes your voice
                    patterns and gives you the exact signals to improve—so you sound confident in
                    every meeting.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/55">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      Instant score
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-purple-300" />
                      Personalized coaching
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      Track improvements
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="pb-24">
            <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
              The only{" "}
              <GradientWord from="from-cyan-300" via="via-emerald-300" to="to-purple-400">
                Accent Training
              </GradientWord>{" "}
              app you need
            </h2>
            <p className="mt-4 text-center text-white/55">
              Every feature designed to help you sound clear, confident, and credible.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: "📊",
                  title: "Corporate Accent Score™",
                  desc: "Get your score in 15 seconds. See how clearly and confidently your voice is perceived in U.S. corporate settings."
                },
                {
                  icon: "🎯",
                  title: "Voice Coach",
                  desc: "Personalized improvement areas with concrete 'try this' guidance for consonant clarity, vowel precision, and intonation."
                },
                {
                  icon: "🎤",
                  title: "Practice Prompts",
                  desc: "Read realistic meeting sentences to train clarity and authority. Record naturally, get instant feedback."
                },
                {
                  icon: "✨",
                  title: "Consonant Clarity",
                  desc: "Make T, D, and final sounds crisp to enhance professional polish and reduce perceived accent barriers."
                },
                {
                  icon: "🔊",
                  title: "Vowel Precision",
                  desc: "Reduce blended vowel patterns that lower perceived precision in technical discussions and executive conversations."
                },
                {
                  icon: "📈",
                  title: "Intonation Patterns",
                  desc: "Practice falling intonation on key points to project more authority and sound decisive in high-stakes meetings."
                }
              ].map((f) => (
                <div
                  key={f.title}
                  className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.55)] transition hover:bg-white/[0.07] hover:ring-white/15"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 ring-1 ring-white/10 text-2xl">
                    {f.icon}
                  </div>
                  <div className="mt-4 text-lg font-semibold">{f.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/55">{f.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* App screenshots section (mobile) */}
          <section className="pb-28">
            <div className="grid gap-10 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 md:grid-cols-2 md:items-center md:p-10">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Built for real meetings
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-white/65">
                  Tap once, record naturally in your normal meeting voice, and get actionable feedback
                  you can apply immediately in your next call.
                </p>
                <div className="mt-8 max-w-md">
                  <WaitlistForm buttonText="Join Waitlist →" />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6">
                <IPhoneFrame
                  src="/screenshots/Screenshot1.png"
                  alt="Clear Accent — Recording Prompt"
                  className="translate-y-0"
                  animationDelay={0.5}
                />
                <IPhoneFrame
                  src="/screenshots/Screenshot2.png"
                  alt="Clear Accent — Corporate Accent Score"
                  className="translate-y-0"
                  animationDelay={1.5}
                />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-10 sm:flex-row">
            <div className="flex items-center gap-3 text-sm text-white/55">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl ring-1 ring-white/10">
                <Image src="/screenshots/AhsanAppsLogo.png" alt="Clear Accent logo" fill className="object-cover" />
              </div>
              <span>© {new Date().getFullYear()} Ahsan Apps</span>
            </div>

            <div className="flex items-center gap-5 text-sm text-white/55">
              <a
                href="https://foundrlist.com/product/clearaccentwaitlist"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-90"
              >
                <img
                  src="https://foundrlist.com/api/badge/clearaccentwaitlist"
                  alt="Live on FoundrList"
                  width="180"
                  height="72"
                />
              </a>
              <a className="transition hover:text-white" href="#join">
                Join
              </a>
              <a className="transition hover:text-white" href="#features">
                Features
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}


