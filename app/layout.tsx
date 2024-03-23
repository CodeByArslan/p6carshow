import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";


export const metadata: Metadata = {
  title: "Carz",
  description: "Take Ride on Fav Car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Nav/>
        {children}</body>
        <Footer/>
    </html>
  );
}
