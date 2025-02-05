import React from "react";
import { TabsTrigger } from "@/components/ui/tabs";

type TabTriggerProps = {
    value: string;
    label: string;
};

export const TabTrigger = ({ value, label }: TabTriggerProps) => (
    <TabsTrigger
        value={value}
        className="uppercase text-md rounded-none data-[state=active]:border-b-3 data-[state=active]:border-red-600 data-[state=active]:dark:text-white data-[state=active]:text-black transition-all shadow-none"
    >
        {label}
    </TabsTrigger>
);