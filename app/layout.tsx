import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khai Hoang Nguyen — Software Engineer",
  description: "The interactive portfolio of Khai Hoang Nguyen, a software engineering student and full-stack builder in San Jose.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
