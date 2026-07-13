import type { Metadata } from "next";
import { Lexend, Space_Grotesk } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend"
});

// Brand wordmark font — only the two weights the lockup uses
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-grotesk"
});

const SITE_NAME = "LetsCRUD";
const TITLE = "LetsCRUD — Business-First Websites, Applications & AI Systems";
const DESCRIPTION =
  "LetsCRUD helps founders and business owners clarify business requirements before building websites, applications, and AI-powered digital systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://letscrud.com"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }]
  },
  openGraph: {
    type: "website",
    url: "https://letscrud.com",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "LetsCRUD — business-first websites, applications & AI systems" }]
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"]
  }
};

export const viewport = {
  themeColor: "#0B0C10"
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: "https://letscrud.com",
  logo: "https://letscrud.com/icon-512.png",
  description: DESCRIPTION,
  email: "hello@letscrud.com",
  founder: { "@type": "Person", name: "Apurv Mittal" },
  areaServed: "IN"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lexend.variable} ${grotesk.variable}`} style={{ colorScheme: "dark" }}>
      <body className="font-sans antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
