import React from "react";
import Link from "next/link";
import { RiArrowDownSFill } from "react-icons/ri";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DropdownMenuProps = {
    options: { href: string; label: string }[];
    trigger: string;
};

export default function MovieDropdownMenu({ options, trigger }: DropdownMenuProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger  className="flex items-center gap-1   cursor-pointer border-none outline-none">
                {trigger}
                <RiArrowDownSFill className="text-lg" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="  border-none ">
                {options.map((option, index) => (
                    <DropdownMenuItem key={index} >
                        <Link href={option.href} className="w-full block px-4 py-2">
                            {option.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}