import type { Metadata, Viewport } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Grain from "@/components/Grain";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import AmbientBackground from "@/components/AmbientBackground";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const siteUrl = "https://zandrelix.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zandrelix",
  description:
    "Zandrelix is a digital solutions company that helps startups and businesses grow with modern websites, mobile apps, shopify stores and creative design.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Zandrelix",
    title: "Zandrelix",
    description:
      "Zandrelix is a digital solutions company that helps startups and businesses grow with modern websites, mobile apps, shopify stores and creative design.",
    images: [{ url: "/app/opengraph-image.png", width: 512, height: 512, alt: "Zandrelix" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zandrelix",
    description:
      "Zandrelix is a digital solutions company that helps startups and businesses grow with modern websites, mobile apps, shopify stores and creative design.",
    images: ["/app/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#05060d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`} suppressHydrationWarning>
      <body className="font-sans text-white bg-bg0 overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zandrelix",
              url: siteUrl,
              logo: `${siteUrl}/images/logo.png`,
              description:
                "Zandrelix is a digital solutions company that helps startups and businesses grow with modern websites, mobile apps, shopify stores and creative design.",
            }),
          }}
        />
        <AmbientBackground />
        <Grain />
        <CustomCursor />
        <ScrollProgressBar />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
