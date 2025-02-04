import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaChromecast } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import MovieDropdownMenu from "./MovieDropdownMenu";
import { DictionaryType } from "@/types/dictionaries";
import { Locale } from "@/lib/i18n/i18n-config";
import TopBarRightMenu from "./TopBarRightMenu";

type TopBarProps = {
  dict: DictionaryType;
  lang: Locale;
};

export default function TopBar({ dict, lang }: TopBarProps) {
  return (
    <div className="z-50 fixed    flex flex-col px-5 sm:px-9 lg:px-20 py-6 top-0 left-0 right-0 bg-gradient-to-b from-black lg:from-black/70 to-transparent transition-all duration-300">
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
            style={{ height: 38, width: 139 }}
            priority
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
          <div className="hidden md:flex flex-row items-center space-x-6 text-white text-md">
            <Link href={`/${lang}/home`} className="hidden xl:block">
              {dict.home}
            </Link>
            <Link href={`/${lang}/tvshows`}>{dict.tv_shows}</Link>
            <Link href={`/${lang}/movies`}>{dict.movies}</Link>
            <Link href={`/${lang}/new-popular`} className="hidden lg:block">{dict.new_popular}</Link>
            <Link href={`/${lang}/my-list`} className="hidden lg:block">{dict.my_list}</Link>
            <Link href={`/${lang}/browse-by-language`} className="hidden lg:block">{dict.browse_by_language}</Link>

            {/* Extracted DropdownMenu Component */}
            <div className="hidden md:block lg:hidden">
              <MovieDropdownMenu

                trigger={dict.categories}
                options={[
                  { href: `/${lang}/new-popular`, label: dict.new_popular },
                  { href: `/${lang}/my-list`, label: dict.my_list },
                  { href: `/${lang}/browse-by-language`, label: dict.browse_by_language },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Right Section - Icons */}
        <div className="flex flex-row items-center gap-x-4 text-white">
          <FaSearch className="text-xl hidden md:block" />
          <p className="hidden md:block">Kids</p>
          <IoMdNotifications className="text-3xl hidden md:block" />
          <FaChromecast className="w-9 h-9 sm:w-11 sm:h-11 block md:hidden" />
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-b from-white to-[#D9D9D9] rounded-md"></div>
          <TopBarRightMenu />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden flex-row justify-center items-center mt-4">
        <div className="flex flex-row items-center justify-center space-x-6 text-white text-lg md:text-lg font-medium">
          <Link href={`/${lang}/tvshows`}>{dict.tv_shows}</Link>
          <Link href={`/${lang}/movies`}>{dict.movies}</Link>

          {/* Extracted DropdownMenu Component for Mobile */}
          <MovieDropdownMenu
            trigger={dict.categories}
            options={[
              { href: `/${lang}/new-popular`, label: dict.new_popular },
              { href: `/${lang}/my-list`, label: dict.my_list },
              { href: `/${lang}/browse-by-language`, label: dict.browse_by_language },
            ]}
          />
        </div>
      </div>
    </div>
  );
}