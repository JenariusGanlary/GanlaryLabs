import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ganlary Labs — AI Engineering Studio",
  description:
    "Ganlary Labs builds intelligent systems, AI-powered products and digital experiences for ambitious businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}