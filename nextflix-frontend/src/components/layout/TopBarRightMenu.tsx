"use client";

import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useThemeSwitcher } from "@/hooks/useThemeSwitcher"; // Import the hook

export default function TopBarRightMenu() {
    const { toggleLightMode, toggleDarkMode } = useThemeSwitcher();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center gap-2 border-none"
                    aria-label="Open theme menu"
                    title="Open theme menu"
                >
                    <RiArrowDownSFill className="text-2xl" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 dark:bg-background border-r-gray-300 border-0">
                <DropdownMenuItem onClick={toggleLightMode}>
                    <Sun className="w-4 h-4 mr-2" /> Light Mode
                </DropdownMenuItem>
                <DropdownMenuItem onClick={toggleDarkMode}>
                    <Moon className="w-4 h-4 mr-2" /> Dark Mode
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}