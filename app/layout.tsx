import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sound by Reda | Professional Music & Audio Production",
  description: "Experience premium music and audio production services by Reda. Discover high-quality sound engineering, mixing, and mastering for your projects.",
  keywords: ["music production", "audio engineering", "mixing", "mastering", "sound design", "Reda"],
  authors: [{ name: "Sound by Reda" }],
  creator: "Reda",
  publisher: "Sound by Reda",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soundbyreda.com",
    siteName: "Sound by Reda",
    title: "Sound by Reda | Professional Music & Audio Production",
    description: "Experience premium music and audio production services by Reda. Discover high-quality sound engineering, mixing, and mastering for your projects.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sound by Reda Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sound by Reda | Professional Music & Audio Production",
    description: "Experience premium music and audio production services by Reda.",
    images: ["/logo.png"],
    creator: "@soundbyreds",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://soundbyreda.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
