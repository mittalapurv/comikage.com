import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend"
});

export const metadata: Metadata = {
  title: "Comikage — Business-First Websites, Applications & AI Systems",
  description: "Comikage helps founders and business owners clarify business requirements before building websites, applications, and AI-powered digital systems.",
  icons: { icon: "/favicon.svg" }
};

export const viewport = {
  themeColor: "#0B0C10"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lexend.variable} style={{ colorScheme: "dark" }}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
