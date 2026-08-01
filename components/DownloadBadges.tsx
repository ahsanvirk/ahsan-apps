import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/clear-accent-american/id6790801104";

export function DownloadBadges({
  className = "",
  layout = "stacked"
}: {
  className?: string;
  layout?: "stacked" | "row";
}) {
  const isRow = layout === "row";

  return (
    <div
      className={`flex w-full gap-4 ${
        isRow ? "max-w-xl flex-row flex-wrap items-center" : "max-w-xs flex-col"
      } ${className}`}
    >
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition hover:opacity-90 ${isRow ? "inline-block shrink-0" : "block w-full"}`}
        aria-label="Download Clear Accent on the App Store"
      >
        <Image
          src="/appstorebanner.png"
          alt="Download on the App Store"
          width={320}
          height={96}
          className={isRow ? "h-[54px] w-auto" : "h-auto w-full"}
        />
      </a>
      <div
        className={isRow ? "inline-block shrink-0" : "block w-full"}
        aria-label="Google Play version coming soon"
      >
        <Image
          src="/gpcomingsoon.png"
          alt="Get it on Google Play — Coming Soon"
          width={320}
          height={96}
          className={isRow ? "h-[54px] w-auto" : "h-auto w-full"}
        />
      </div>
    </div>
  );
}
