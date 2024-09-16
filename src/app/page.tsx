"use client";

import Image from "next/image";
import Hero from "@/app/comp/Hero";
import Navbar from "@/app/comp/Navbar";
import Experience from "@/app/comp/Experience";
import Card from "./comp/Card";
import Testimonials from "./comp/Testimonials";
import Footer from "./comp/Footer";
import { FloatingDock } from "@/components/ui/floating-dock";
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
  // Define the items array with title, icon, and href
  const items = [
    { title: "Home", icon: <IconHome />, href: "/" },
    { title: "Profile", icon: <IconUser />, href: "#" },
    { title: "Settings", icon: <IconSettings />, href: "#" },
  ];

  return (
    <>
      {/* Other components */}
      <div className="w-full min-h-screen flex justify-center items-center">
      <FloatingDock items={items} />
      </div>
      <div className="block md:hidden  flex justify-center items-center">
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
       </Sheet>

      </div>
    </>
  );
}
