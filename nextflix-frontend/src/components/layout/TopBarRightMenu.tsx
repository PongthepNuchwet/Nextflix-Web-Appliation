"use client";

import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TopBarRightMenu() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2  border-none">
                    <RiArrowDownSFill className="text-2xl" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 dark:bg-background border-r-gray-300  border-0">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="w-4 h-4 mr-2" /> Light Mode
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="w-4 h-4 mr-2" /> Dark Mode
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}