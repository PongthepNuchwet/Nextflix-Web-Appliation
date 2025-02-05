import React from "react";
import Link from "next/link";
import { RiArrowDownSFill } from "react-icons/ri";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale } from "@/lib/i18n/i18n-config";

type DropdownMenuProps = {
    options: { href: string; label: string }[];
    trigger: string;
    lang: Locale;
    toggleLanguage: () => void
    getLinkClass: (href: string) => string
};

export default function MovieDropdownMenu({ options, trigger, toggleLanguage }: DropdownMenuProps) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1   cursor-pointer border-none outline-none">
                {trigger}
                <RiArrowDownSFill className="text-lg" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="  border-none ">
                {options.map((option, index) => {
                    if (option.href.includes('browse-by-language')) {
                        return (
                            <DropdownMenuItem
                                key={index}
                                className="cursor-pointer border-none outline-none py-3"
                                onClick={toggleLanguage}
                            >
                                {option.label}
                            </DropdownMenuItem>
                        )
                    } else {
                        return (
                            <DropdownMenuItem key={index} >
                                <Link href={option.href} className="w-full block px-4 py-2">
                                    {option.label}
                                </Link>
                            </DropdownMenuItem>
                        )
                    }
                })}
            </DropdownMenuContent>
        </DropdownMenu >
    );
}