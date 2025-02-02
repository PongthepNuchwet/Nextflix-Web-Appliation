import React from "react";
import Link from "next/link";
import { RiArrowDownSFill } from "react-icons/ri";

interface DropdownMenuProps {
    isOpen: boolean;
    toggle: () => void;
    options: { href: string; label: string }[];
}

export default function DropdownMenu({ isOpen, toggle, options }: DropdownMenuProps) {
    return (
        <div className="relative">
            <button onClick={toggle} className="flex items-center space-x-1">
                <span>Categories</span>
                <RiArrowDownSFill className="text-2xl" />
            </button>
            {isOpen && (
                <div className="absolute mt-2 w-40 bg-black text-white rounded-lg shadow-lg py-2">
                    {options.map(({ href, label }) => (
                        <Link key={href} href={href} className="block px-4 py-2 hover:bg-gray-800">
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}