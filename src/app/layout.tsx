import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider"
import { TextureOverlay } from "@/components/ui/texture-overlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suyog P P - Portfolio",
  description: "GSenior Frontend Developer, Open Source Enthusiast, and Tech Blogger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-muted dark:bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem={false}
        >
          <div className="w-full">
            <div>
              <Navigation />
              {children}
            </div>
            <div className="w-full h-full fixed left-0 top-0 z-[-1]!">
              <TextureOverlay texture="noise" />
            </div>

          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
