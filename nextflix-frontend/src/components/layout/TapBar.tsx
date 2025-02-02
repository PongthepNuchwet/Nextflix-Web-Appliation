"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaChromecast } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";
import DropdownMenu from "./DropdownMenu";

export default function TapBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed flex flex-col px-5 sm:px-9 lg:px-20 py-6 top-0 left-0 right-0 bg-gradient-to-b from-black lg:from-black/70 to-transparent z-50 transition-all duration-300">
      {/* Main Navigation Container */}
      <div className="flex flex-row justify-between items-center">
        {/* Left Section - Logo & Desktop Menu */}
        <div className="flex flex-row items-center space-x-10">
          {/* Netflix Logo */}
          <Image
            src="/vector/netflix-logo.svg"
            className="hidden md:block"
            alt="logo"
            width={139}
            height={38}
          />
          <Image
            src="/images/netflix-logo-small.png"
            alt="logo"
            className="block md:hidden w-4 sm:w-6 md:w-8 lg:w-10"
            width={44}
            height={97}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row items-center space-x-6 text-white text-xl">
            <Link href="/home" className="hidden xl:block">Home</Link>
            <Link href="/tvshows">TV Shows</Link>
            <Link href="/moview">Movies</Link>

            {/* Extracted DropdownMenu Component */}
            <DropdownMenu
              isOpen={dropdownOpen}
              toggle={() => setDropdownOpen(!dropdownOpen)}
              options={[
                { href: "/new-popular", label: "New & Popular" },
                { href: "/my-list", label: "My List" },
                { href: "/browse-by-language", label: "Browse by Language" },
              ]}
            />
          </div>
        </div>

        {/* Right Section - Icons */}
        <div className="flex flex-row items-center gap-x-4 text-white">
          <FaSearch className="text-xl hidden md:block" />
          <p className="hidden md:block">Kids</p>
          <IoMdNotifications className="text-3xl hidden md:block" />
          <FaChromecast className="w-9 h-9 sm:w-11 sm:h-11 block md:hidden" />
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-b from-white to-[#D9D9D9] rounded-md"></div>
          <RiArrowDownSFill className="text-2xl hidden md:block" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden flex-row justify-center items-center mt-4">
        <div className="flex flex-row items-center justify-center space-x-6 text-white text-sm md:text-lg font-medium">
          <Link href="/tvshows">TV Shows</Link>
          <Link href="/moview">Movies</Link>

          {/* Extracted DropdownMenu Component for Mobile */}
          <DropdownMenu
            isOpen={dropdownOpen}
            toggle={() => setDropdownOpen(!dropdownOpen)}
            options={[
              { href: "/new-popular", label: "New & Popular" },
              { href: "/my-list", label: "My List" },
              { href: "/browse-by-language", label: "Browse by Language" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}