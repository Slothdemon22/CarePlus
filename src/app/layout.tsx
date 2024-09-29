import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EdgeStoreProvider } from '../lib/edgestore';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` font-sans `}
      >
        <Navbar/>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
        <ToastContainer />
        <Footer/>
      </body>
    </html>
  );
}
