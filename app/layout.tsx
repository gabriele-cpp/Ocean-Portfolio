import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { BubbleParticles } from "@/components/ui/BubbleParticles";
import { Navbar } from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Gabriel Emil — Frontend Developer",
  description:
    "Portfolio interaktif seorang Frontend Developer yang passionate menciptakan pengalaman digital luar biasa.",
  keywords: ["developer", "portfolio", "next.js", "typescript", "frontend"],
  authors: [{ name: "Gabriel Emil" }],
  openGraph: {
    title: "Gabriel Emil - Frontend Developer",
    description: "Im looking for job pls",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="font-body bg-ocean-abyss text-ocean-sand antialiased">
        <CustomCursor />
        <BubbleParticles />
        <Navbar />
        <main className="page-enter">{children}</main>

        {/* Global ocean depth gradient overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(4,150,255,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,245,212,0.04) 0%, transparent 50%)",
          }}
        />
      </body>
    </html>
  );
}
