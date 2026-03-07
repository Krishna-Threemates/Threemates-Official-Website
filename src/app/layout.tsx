import type { Metadata } from "next";
import { Inter, Fira_Code, Anton } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-sans" });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: "Threemates",
    template: "%s | Threemates",
  },
  description: "Global UI UX design agency digital partner for startup",
  icons: {
    icon: [
      { url: "/assets/icon.png", media: "(prefers-color-scheme: light)" },
      { url: "/assets/darkIcon.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable, firaCode.variable, anton.variable)}>
      <body className="antialiased min-h-screen flex flex-col relative">
        {/* Cool Blue Glow Top */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `radial-gradient(circle at top center, rgba(70, 130, 180, 0.5), transparent 70%)`,
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
          <Navigation data={{}} />
          <main className="flex-grow relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
