import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/animations.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "VEXO - Innovating Tomorrow, Today",
  description: "Leading technology company delivering cutting-edge enterprise solutions, AI-powered platforms, and innovative digital experiences that transform businesses and drive growth.",
  keywords: "VEXO, technology, enterprise solutions, AI, innovation, digital transformation",
  authors: [{ name: "VEXO Company" }],
  openGraph: {
    title: "VEXO - Innovating Tomorrow, Today",
    description: "Leading technology company delivering cutting-edge enterprise solutions and AI-powered platforms.",
    url: "https://vexo.com",
    siteName: "VEXO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VEXO - Innovating Tomorrow, Today",
    description: "Leading technology company delivering cutting-edge enterprise solutions and AI-powered platforms.",
    creator: "@vexocompany",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}