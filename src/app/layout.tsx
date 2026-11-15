import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rusul Azom Sumon | AI-Driven Full-Stack Developer",
  description:
    "Rusul Azom Sumon architects sub-second, SEO-indexed, zero-cost-scaling web platforms powered by Next.js, React, Node.js, TypeScript, and AI engineering workflows.",
  applicationName: "Rusul.dev",
  openGraph: {
    title: "Rusul Azom Sumon | AI-Driven Full-Stack Developer",
    description:
      "Architecting sub-second, SEO-indexed, zero-cost-scaling web platforms.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
