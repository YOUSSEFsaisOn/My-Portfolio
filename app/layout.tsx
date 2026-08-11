import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import DynamicTheme from "@/components/dynamic-theme";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "The DevHouse - Premium Software Portfolio",
  description:
    "Premium software development company specializing in React.js, Next.js, and .NET. Partner with us to engineer robust digital solutions.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoSlab.variable} font-sans antialiased`}
      >
        <DynamicTheme />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
