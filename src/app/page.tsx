"use client";

import Navbar from "@/comp/Navbar"; // If you plan to use Navbar, uncomment this
import Experience from "@/comp/Experience";
import Card from "../comp/Card";
import Testimonials from "../comp/Testimonials";
import Footer from "../comp/Footer"; // If you plan to use Footer, uncomment this
import { FloatingDock } from "@/components/ui/floating-dock"; // If you plan to use FloatingDock, uncomment this
import Hero from "../comp/Hero";
// import { IconHome, IconUser, IconSettings } from "@tabler/icons-react"; // If you plan to use these icons, uncomment this
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"; // If you plan to use these components, uncomment this

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Card />
      <Testimonials />
      {/* Uncomment the following components if you decide to use them */}
      {/* <Navbar /> */}
      {/* <Footer /> */}
      {/* <FloatingDock /> */}
      {/* Add any additional components you need here */}
    </>
  );
}
