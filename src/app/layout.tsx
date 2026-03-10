import type { Metadata } from "next";
import { Inter, Fira_Code, Anton } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { getGlobalData } from "@/lib/data-loader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-sans" });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://threemates.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Threemates — Modern IT Solutions & Software Development",
    template: "%s | Threemates",
  },
  description:
    "Threemates is a technology company providing modern IT services including ERP systems, SaaS platforms, web development, and mobile applications. Based in Bhubaneswar, India.",
  keywords: [
    "Threemates",
    "software development",
    "ERP solutions",
    "SaaS development",
    "web development",
    "mobile app development",
    "IT services",
    "Bhubaneswar",
    "India",
    "school ERP",
    "college ERP",
    "hospital management system",
    "cloud solutions",
    "React",
    "Next.js",
    "Node.js",
    "digital transformation",
  ],
  authors: [{ name: "Threemates", url: SITE_URL }],
  creator: "Threemates",
  publisher: "Threemates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Threemates",
    title: "Threemates — Modern IT Solutions & Software Development",
    description:
      "We build ERP systems, SaaS platforms, web & mobile applications that help businesses digitize operations and scale efficiently.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Threemates — Modern IT Solutions & Software Development",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Threemates — Modern IT Solutions & Software Development",
    description:
      "We build ERP systems, SaaS platforms, web & mobile applications that help businesses digitize operations and scale efficiently.",
    images: ["/og-image.png"],
    creator: "@threemates",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/icon.png", sizes: "124x124", type: "image/png" },
      { url: "/assets/darkIcon.png", sizes: "384x384", type: "image/png" },
    ],
    apple: [
      { url: "/assets/darkIcon.png", sizes: "360x360", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  category: "technology",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const global = await getGlobalData();
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable, firaCode.variable, anton.variable)}>
      <head>
        {/* JSON-LD Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Threemates",
              url: SITE_URL,
              logo: `${SITE_URL}/assets/darkIcon.png`,
              description:
                "Threemates is a technology company providing modern IT services including ERP systems, SaaS platforms, web development, and mobile applications.",
              email: "hello@threemates.tech",
              telephone: "+91-93480-32632",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhubaneswar",
                addressRegion: "Odisha",
                addressCountry: "IN",
              },
              sameAs: [],
              foundingDate: "2024",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-93480-32632",
                contactType: "customer service",
                email: "hello@threemates.tech",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />
        {/* JSON-LD Structured Data — WebSite (for sitelinks search) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Threemates",
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/blog?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative">
        {/* Cool Blue Glow Top */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle at top center, rgba(70, 130, 180, 0.2), transparent 50%)`,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Loader />
          <Navigation data={{}} />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer data={global?.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}
