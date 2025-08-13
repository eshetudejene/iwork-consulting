import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "iWork | Consulting & Technology Solutions",
  description: "Professional business consulting and technology solutions in Ethiopia. We make smart moves and get results quickly with innovative consulting and smart tech solutions.",
  keywords: [
    "business consulting",
    "technology solutions",
    "digital transformation",
    "enterprise software",
    "AI solutions",
    "website development",
    "Ethiopia",
    "Addis Ababa",
    "strategic planning",
    "performance optimization"
  ],
  authors: [{ name: "iWork Consulting PLC" }],
  creator: "iWork Consulting PLC",
  publisher: "iWork Consulting PLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  metadataBase: new URL("https://consultiwork.com"),
  alternates: {
    canonical: "/",
  },
  // Favicon is automatically handled by Next.js when placed in /public/favicon.ico
  // Additional icons can be configured here if needed
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon_iwork.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon_iwork.png', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://consultiwork.com",
    title: "iWork | Consulting & Technology Solutions",
    description: "Professional business consulting and technology solutions in Ethiopia. We make smart moves and get results quickly.",
    siteName: "iWork Consulting PLC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "iWork Consulting PLC - Consulting & Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iWork | Consulting & Technology Solutions",
    description: "Professional business consulting and technology solutions in Ethiopia. We make smart moves and get results quickly.",
    images: ["/og-image.jpg"],
    creator: "@consultiwork",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="icon" href="/icon_iwork.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon_iwork.png" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "iWork Consulting PLC",
              "alternateName": "ConsultiWork",
              "url": "https://consultiwork.com",
              "logo": "https://consultiwork.com/logo_iwork_light.png",
              "description": "Professional business consulting and technology solutions in Ethiopia. We make smart moves and get results quickly.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hager Consult Building, 2nd Floor",
                "addressLocality": "Addis Ababa",
                "addressCountry": "ET"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+251-913-661078",
                "contactType": "customer service",
                "email": "hello@consultiwork.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/consultiwork",
                "https://twitter.com/consultiwork"
              ],
              "foundingDate": "2024",
              "numberOfEmployees": "10-50"
            })
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "iWork Consulting PLC",
              "image": "https://consultiwork.com/office.jpg",
              "description": "Professional business consulting and technology solutions in Ethiopia",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hager Consult Building, 2nd Floor",
                "addressLocality": "Addis Ababa",
                "addressCountry": "ET"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "9.0322",
                "longitude": "38.7636"
              },
              "url": "https://consultiwork.com",
              "telephone": "+251-913-661078",
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$"
            })
          }}
        />

        {/* Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Business Consulting & Technology Solutions",
              "description": "Professional business consulting and technology solutions including management consulting, website development, and AI solutions.",
              "provider": {
                "@type": "Organization",
                "name": "iWork Consulting PLC"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Ethiopia"
              },
              "serviceType": [
                "Business Consulting",
                "Technology Solutions",
                "Website Development",
                "AI Implementation"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
