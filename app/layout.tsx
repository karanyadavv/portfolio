import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karan Yadav",
  description: "Frontend Developer",
  metadataBase: new URL("https://karanyadav.vercel.app/"),

  twitter: {
    card: "summary_large_image",
    site: "https://karanyadav.vercel.app/",
    creator: "@karann_yadavv",
    title: "Karan Yadav - Frontend Developer",
    images: ["https://karanyadav.vercel.app/opengraph-image.jpg"],
  },
  openGraph: {
    title: "Karan Yadav - Frontend Developer",
    description: "Frontend Developer",
    images: [
      {
        url: "https://karanyadav.vercel.app/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karan Yadav Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} text-gray-750 relative mx-auto max-w-4xl bg-gray-100 pt-28 dark:bg-stone-950 dark:text-zinc-200 dark:text-opacity-90 sm:pt-36`}
      >
        <div className="absolute left-0 top-0 hidden h-full overflow-hidden border-l-2 border-dashed border-border [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_80%,transparent_100%)] sm:block" />
        <div className="absolute right-0 top-0 hidden h-full overflow-hidden border-r-2 border-dashed border-border [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_80%,transparent_100%)] sm:block" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
