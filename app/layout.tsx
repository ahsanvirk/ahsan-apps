import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "AhsanApps - Clear Accent Waitlist",
  description: "Join the waitlist for Clear Accent - Train Your Corporate Voice"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}


