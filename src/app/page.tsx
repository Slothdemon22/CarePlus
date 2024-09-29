"use client";


import Experience from "@/comp/Experience";
import Card from "../comp/Card";
import Testimonials from "../comp/Testimonials";

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
