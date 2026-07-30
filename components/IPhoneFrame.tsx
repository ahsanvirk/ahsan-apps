import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  animationDelay?: number; // Delay in seconds
};

export function IPhoneFrame({ src, alt, priority, className, animationDelay = 0 }: Props) {
  // Properly encode the URL for Next.js Image
  const imageSrc = src.startsWith("/") ? src : `/${src}`;
  
  return (
      <div
        className={[
          "relative isolate rounded-[36px] bg-gradient-to-b from-white/10 to-white/5 p-[8px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-floaty",
          className ?? ""
        ].join(" ")}
        style={{ animationDelay: `${animationDelay}s` }}
        suppressHydrationWarning
      >
      <div className="relative overflow-hidden rounded-[28px] bg-[#090B12] ring-1 ring-white/10">
        {/* Screen */}
        <div className="relative aspect-[9/19.5] w-[180px] sm:w-[200px] md:w-[220px]">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 220px"
            priority={priority}
            unoptimized={true}
          />
        </div>

        {/* Notch */}
        <div className="pointer-events-none absolute left-1/2 top-1.5 h-5 w-28 -translate-x-1/2 rounded-full bg-black/85 ring-1 ring-white/10" />

        {/* Side highlights */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-40" />
      </div>

      {/* Outer glow - more vibrant like the inspiration */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[44px] bg-gradient-to-r from-cyan-500/30 via-purple-500/25 to-fuchsia-500/30 blur-2xl opacity-80" />
      <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[36px] bg-gradient-to-r from-cyan-400/20 via-purple-400/15 to-fuchsia-400/20 blur-xl" />
    </div>
  );
}
