import BottomNavbar from "@/components/BottomNavbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Topnavbar from "@/components/Topnavbar";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Konpol",
  description: "Solutions Providers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>Konpol Company</Head>
        <Topnavbar />
        <Navbar />
        <BottomNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
