"use client";

import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Necrozma Labs",
  description: "Solving the world's biggest problems with technology. We focus on clean energy, quantum computing, and AI to create a sustainable future.",
  keywords: "clean energy, quantum computing, AI, sustainable technology, Necrozma Labs, innovation, necrozma, necrozmalabs",
  author: "Abhinav Sharma",
  url: "https://www.necrozmalabs.com",
  image: "/logo.svg", // Replace with your actual OG image path if any
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}>
        <div className="w-full">
          <Header />
          <main className="pt-30">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
