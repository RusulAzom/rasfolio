import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rusul Azom Sumon | AI-Driven Full-Stack Developer",
  description:
    "Rusul Azom Sumon builds fast, scalable full-stack web applications with Next.js, React, TypeScript, and lean cloud infrastructure.",
  applicationName: "Rusul.dev",
  openGraph: {
    title: "Rusul Azom Sumon | AI-Driven Full-Stack Developer",
    description:
      "Building sub-second, SEO-indexed, scalable web applications.",
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
