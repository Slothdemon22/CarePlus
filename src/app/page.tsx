"use client";

import Image from "next/image";

import Navbar from "@/comp/Navbar";
import Experience from "@/comp/Experience";
import Card from "../comp/Card";
import Testimonials from "../comp/Testimonials";
import Footer from "../comp/Footer";
import { FloatingDock } from "@/components/ui/floating-dock";
import Hero from "../comp/Hero";
import { IconHome, IconUser, IconSettings } from "@tabler/icons-react"; // Example icons
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Home() {
 

  return (
    <>
      
        <Hero />
        <Experience />
        <Card />
        <Testimonials />
       
        
     

     
    </>
  );
}
