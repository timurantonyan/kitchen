import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/header";
import {Providers} from "@/providers/providers";
import {siteConfig} from "@/config/site.config";
import {layoutConfig} from "@/config/layout.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
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
        <Providers>
            <Header/>
            <main className={`flex flex-col items-center justify-start w-full`}
                  style= {{
                      height: `calc(100vh - ${layoutConfig.heightHeader} - ${layoutConfig.heightFooter})`}}
            >
                {children}
            </main>
            <footer className={`w-full flex items-center justify-center`}
            style={{height: layoutConfig.heightFooter}}>

                <p>{siteConfig.description}</p>
            </footer>

        </Providers>
      </body>
    </html>
  );
}
