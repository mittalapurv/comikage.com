import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comikage — Business-First Websites, Applications & AI Systems",
  description: "Comikage helps founders and business owners clarify business requirements before building websites, applications, and AI-powered digital systems."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans antialiased">{children}</body></html>;
}
