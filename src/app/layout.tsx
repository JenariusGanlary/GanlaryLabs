import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ganlary Labs — AI Engineering Studio",
  description:
    "Ganlary Labs builds intelligent systems, AI-powered products and digital experiences for ambitious businesses.",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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
