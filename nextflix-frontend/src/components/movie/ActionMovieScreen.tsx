import React from "react";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline, IoMdAdd } from "react-icons/io";
import { DictionaryType } from "@/types/dictionaries";

type Props = {
    movieID: number;
    dict: DictionaryType
};

export default function ActionMovieScreen({ movieID, dict }: Props) {
    return (
        <div className="flex flex-row items-center justify-evenly md:items-start md:justify-start gap-4 w-full">

            {/* My List (Mobile) */}
            <Button variant="ghost" className="md:hidden text-white font-medium p-0 text-lg flex flex-col items-center gap-0 h-auto">
                <IoMdAdd style={{ width: 30, height: 30 }} />
                {dict.my_list}
            </Button>

            {/* Play Button */}
            <Button variant="default" className="bg-white text-black font-medium text-lg flex items-center gap-2">
                <FaPlay size={20} />
                {dict.play}
            </Button>

            {/* Info Button (Mobile) */}
            <Button variant="ghost" className="md:hidden text-white font-medium text-lg p-0 flex flex-col gap-0 h-auto">
                <IoMdInformationCircleOutline style={{ width: 30, height: 30 }} />
                {dict.info}
            </Button>

            {/* More Info Button (Desktop) */}
            <Button variant="default" className="hidden md:flex bg-[#515451] text-white font-medium text-lg items-center gap-2">
                <IoMdInformationCircleOutline style={{ width: 30, height: 30 }} />
                {dict.more_info}
            </Button>
        </div>
    );
}