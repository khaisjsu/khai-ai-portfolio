import type { Metadata } from "next";
import "./globals.css";

const title = "Khai Hoang Nguyen — Software Engineer";
const description =
  "The interactive portfolio of Khai Hoang Nguyen, a software engineering student and full-stack builder in San Jose. Ask the built-in assistant about his projects, skills, and experience.";

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title,
  description,
  keywords: [
    "Khai Hoang Nguyen",
    "Software Engineer",
    "San Jose State University",
    "Full-Stack Developer",
    "Portfolio",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: ["/assets/khai-nguyen.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/khai-nguyen.jpg"],
  },
};

export const viewport = {
  themeColor: "#f1efe8",
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
