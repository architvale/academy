import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ToasterProvider from "@/components/providers/ToasterProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Vision Academy",
  description: "Empowering minds , shaping future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <head>
          {/* Favicon link with the correct path */}
          <link rel="icon" href="/app/favicon.ico" />
        </head>
        <body className={inter.className}>
        <ToasterProvider/>{children}</body>
      </html>
    </ClerkProvider>
  );
}
