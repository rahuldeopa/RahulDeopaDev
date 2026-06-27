import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahuldeopa.dev"),
  title: "Rahul Deopa | Backend Engineer | Full Stack Developer",
  description:
    "Software Developer specializing in scalable backend systems, enterprise applications, REST APIs, AI-powered software, workflow automation and cloud technologies.",
  keywords: [
    "Rahul Deopa",
    "Backend Engineer",
    "Full Stack Developer",
    "Software Developer",
    "Node.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Enterprise Applications",
    "AI",
    "REST API",
  ],
  authors: [{ name: "Rahul Deopa", url: "https://rahuldeopa.dev" }],
  creator: "Rahul Deopa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahuldeopa.dev",
    siteName: "Rahul Deopa",
    title: "Rahul Deopa | Backend Engineer | Full Stack Developer",
    description:
      "Software Developer specializing in scalable backend systems, enterprise applications, REST APIs, AI-powered software, workflow automation and cloud technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Deopa - Backend Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Deopa | Backend Engineer | Full Stack Developer",
    description:
      "Software Developer specializing in scalable backend systems, enterprise applications, REST APIs, AI-powered software, workflow automation and cloud technologies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://rahuldeopa.dev" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
