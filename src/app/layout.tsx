import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import TopNav from "@/components/layout/TopNav";
import BottomTabBar from "@/components/layout/BottomTabBar";
import Footer from "@/components/layout/Footer";
import LiveSupport from "@/components/layout/LiveSupport";
import ExtensionErrorGuard from "@/components/layout/ExtensionErrorGuard";

export const metadata: Metadata = {
  title: {
    default: "GEM Cyber | Enterprise Security & Physical Asset Protection",
    template: "%s | GEM Cyber"
  },
  description: "Unified Operations Center for global threat detection, federal compliance, and high-value physical asset protection. Security for the modern Hybrid Enterprise.",
  keywords: ["cybersecurity", "asset recovery", "federal compliance", "threat monitoring", "GEM Cyber", "Hybrid Enterprise"],
  authors: [{ name: "GEM Cyber" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-slate-950 text-white min-h-screen pb-16 lg:pb-0">
        <ExtensionErrorGuard />
        <Suspense fallback={null}><TopNav /></Suspense>
        <main className="pt-16">{children}</main>
        <Footer />
        <LiveSupport />
        <Suspense fallback={null}><BottomTabBar /></Suspense>
      </body>
    </html>
  );
}
