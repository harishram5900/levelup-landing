import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "LevelUp | Build discipline. Grow influence.",
  description:
    "One ecosystem for creators, founders, and ambitious builders. LevelUp combines creator growth intelligence and personal productivity into one connected experience.",
  openGraph: {
    title: "LevelUp | Build discipline. Grow influence.",
    description:
      "One ecosystem for creators, founders, and ambitious builders. LevelUp combines creator growth intelligence and personal productivity into one connected experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LevelUp | Build discipline. Grow influence.",
    description:
      "One ecosystem for creators, founders, and ambitious builders. LevelUp combines creator growth intelligence and personal productivity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
