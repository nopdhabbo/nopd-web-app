import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Head from "next/head"; // Import Head component from next/head

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOPD - New Orlean's Police Department",
  description:
    "Welcome to NOPD, your premier Habbo agency offering a vibrant virtual community where Habbo enthusiasts can thrive! Dive into a world where friendship knows no bounds, as you earn and utilize Habbo credits to unlock exciting opportunities. Join captivating events, indulge in thrilling games, and immerse yourself in rich role-playing experiences—all within our dynamic Habbo environment. Whether you're a seasoned player or new to the scene, NOPD is your gateway to endless entertainment and meaningful connections. Embark on your journey today and discover the endless possibilities awaiting you in the colorful world of NOPD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
