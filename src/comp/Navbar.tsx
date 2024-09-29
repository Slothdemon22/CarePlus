"use client"; // This makes the component a client-side component

import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"; // Importing shadcn Sheet

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-screen h-16 bg-white shadow-md">
      <nav className="flex justify-between items-center h-full px-4 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          Health<span className="text-blue-600">Care</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" passHref>
            <div
              className={`relative p-3 text-lg font-semibold cursor-pointer transition-colors duration-300 ${
                isActive("/")
                  ? "text-blue-600 underline"
                  : "hover:text-blue-600 hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:before:h-[2px] hover:before:w-full hover:before:bg-blue-600"
              }`}
            >
              Home
            </div>
          </Link>

          <Link href="/appointment" passHref>
            <div
              className={`relative p-3 text-lg font-semibold cursor-pointer transition-colors duration-300 ${
                isActive("/appointment")
                  ? "text-blue-600 underline"
                  : "hover:text-blue-600 hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:before:h-[2px] hover:before:w-full hover:before:bg-blue-600"
              }`}
            >
              Appointment
            </div>
          </Link>
        </div>

        {/* Sign In Button for Desktop */}
        <div className="hidden md:flex items-center">
          <Link href="/signin" passHref>
            <button
              type="button"
              className="py-2 px-6 border-none rounded-full font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg transition-all duration-300"
            >
              Sign In
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <CiMenuBurger className="text-2xl cursor-pointer" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col p-4 bg-gradient-to-b from-white to-gray-200 w-64 rounded-tr-lg rounded-br-lg shadow-xl transition-transform duration-500"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Menu</h2>
              <Link href="/" passHref>
                <div
                  className={`p-3 text-lg font-medium cursor-pointer transition-colors duration-300 ${
                    isActive("/")
                      ? "text-blue-600 underline"
                      : "hover:text-blue-600 hover:bg-gray-100 rounded-lg"
                  }`}
                  onClick={handleLinkClick} // Close menu on click
                >
                  Home
                </div>
              </Link>

              <Link href="/appointment" passHref>
                <div
                  className={`p-3 text-lg font-medium cursor-pointer transition-colors duration-300 ${
                    isActive("/appointment")
                      ? "text-blue-600 underline"
                      : "hover:text-blue-600 hover:bg-gray-100 rounded-lg"
                  }`}
                  onClick={handleLinkClick} // Close menu on click
                >
                  Appointment
                </div>
              </Link>

              <Link href="/signin" passHref>
                <div
                  className="p-3 text-lg font-medium cursor-pointer transition-colors duration-300 hover:text-blue-600 hover:bg-gray-100 rounded-lg"
                  onClick={handleLinkClick} // Close menu on click
                >
                  Sign In
                </div>
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
