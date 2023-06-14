"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header/page";
import "../public/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>CodeParts</title>
        <meta
          name="description"
          content="CodeParts is new Social Network System for Programmer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
