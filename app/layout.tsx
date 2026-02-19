import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillUp - Professional Website Development",
  description: "We build professional websites that help businesses grow. Custom web design, development, and e-commerce solutions.",
  keywords: ["web design", "web development", "business website", "ecommerce", "seo", "skillup"],
  openGraph: {
    title: "SkillUp - Professional Website Development",
    description: "Transform your digital presence with high-performance websites.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <BackgroundEffects />
          <Navbar />
          {children}
          <ThemeToggle />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
