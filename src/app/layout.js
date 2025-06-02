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

// Meta data
export const metadata = {
  title: "Necrozma Labs",
  description: "Solving the world's biggest problems with technology. We focus on clean energy, quantum computing, and AI to create a sustainable future. Join us in our mission to innovate for a better tomorrow.",
  keywords: "clean energy, quantum computing, AI, sustainable technology, Necrozma Labs, innovation, necrozma, necrozmalabs",
  author: "Abhinav Sharma",
  url: "https://www.necrozmalabs.com",
  image: "/logo.svg",
  openGraph: {
    title: "Necrozma Labs",
    description: "Solving the world's biggest problems with technology. We focus on clean energy, quantum computing, and AI to create a sustainable future.",
    url: "https://www.necrozmalabs.com",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Necrozma Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Necrozma Labs",
    description: "Solving the world's biggest problems with technology. We focus on clean energy, quantum computing, and AI to create a sustainable future.",
    creator: "@abhinavsharma",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
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
