import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoOps Content Agent",
  description: "Content operations automation backend for trend-driven brand publishing."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
