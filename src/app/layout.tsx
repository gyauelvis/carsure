import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavComponent } from "@/components/nav-landing";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carsure | Drive with Confidence. Verify Before You Buy",
  description: "A platform to verify car history and ownership",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Carsure | Drive with Confidence. Verify Before You Buy",
    description: "A platform to verify car history and ownership",
    url: "https://carsure.vercel.app/",
    siteName: "Carsure",
    images: [
      {
        url: "/og.png",
        width: 32,
        height: 32,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Carsure | Drive with Confidence. Verify Before You Buy",
    description: "A platform to verify car history and ownership",
    images: ["/og.png"],
    creator: "@gyauelvis"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="scroll-smooth overflow-x-hidden font-sans bg-gradient-to-b dark:from-gray-950 dark:to-black min-h-screen">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>
            <NavComponent />
            <main>
              <section className="flex items-center justify-center  text-gray-200 w-full">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
                <div className="container w-full md:h-screen space-y-10 max-w-7xl mx-4 md:mx-2 py-10">
                  {children}
                  <Toaster />
                </div>
              </section>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html >
  );
}
