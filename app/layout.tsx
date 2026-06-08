import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
  title: "DIMAS.DEV | AI & Full Stack Engineer",
  description:
    "Portfolio of Dimas Bagus Setya Putra — AI Engineer, ML Engineer, and Full Stack Developer specializing in RAG systems, computer vision, and production-grade intelligent applications.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Portfolio",
    "Dimas Bagus Setya Putra",
    "RAG",
    "Computer Vision",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Dimas Bagus Setya Putra" }],
  openGraph: {
    title: "DIMAS.DEV | AI & Full Stack Engineer",
    description:
      "Portfolio of Dimas Bagus Setya Putra — AI Engineer, ML Engineer, and Full Stack Developer.",
    type: "website",
    locale: "en_US",
    siteName: "DIMAS.DEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIMAS.DEV | AI & Full Stack Engineer",
    description:
      "Portfolio of Dimas Bagus Setya Putra — AI Engineer, ML Engineer, and Full Stack Developer.",
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} grid-bg antialiased`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
