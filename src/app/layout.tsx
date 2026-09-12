import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResearcherVerificationModal from "@/components/ResearcherVerificationModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Supreme Tides | Research Use Only",
  description:
    "Supreme Tides is a B2B wholesale supplier of research-use-only laboratory materials for qualified research institutions and laboratories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ResearcherVerificationModal />
      </body>
    </html>
  );
}
