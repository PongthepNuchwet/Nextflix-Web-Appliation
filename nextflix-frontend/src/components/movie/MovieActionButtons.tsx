import React, { Suspense } from "react";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline, IoMdAdd } from "react-icons/io";
import { DictionaryType } from "@/types/dictionaries";
import {
    Dialog,
    DialogContent,
    // DialogDescription,
    // DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import MovieVideo from "./MovieVideo";
import { Movie } from "@/types/movie.interface";
import { Locale } from "@/lib/i18n/i18n-config";

type MovieActionButtonsProps = {
    movie: Movie
    dict: DictionaryType
    lang: Locale;
};

export default function MovieActionButtons({ movie, dict, lang }: MovieActionButtonsProps) {
    return (
        <div className="flex flex-row items-center justify-evenly md:items-start md:justify-start gap-4 w-full">

            {/* My List (Mobile) */}
            <Button variant="ghost" className="md:hidden text-white font-medium p-0 text-lg flex flex-col items-center gap-0 h-auto">
                <IoMdAdd style={{ width: 30, height: 30 }} />
                {dict.my_list}
            </Button>

            {/* Play Button */}
            <Dialog >
                <DialogTrigger asChild>
                    <Button variant="default" className="bg-white text-black font-medium text-lg flex items-center gap-2">
                        <FaPlay size={20} />
                        {dict.play}
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-white dark:bg-gray-900 lg:min-w-3xl" autoFocus={false}>
                    < DialogTitle className="text-black dark:text-white">
                        {movie.title || movie.name}
                    </DialogTitle>
                    <Suspense fallback={<div>{dict.loading}</div>}>
                        <MovieVideo lang={lang} movie={movie} />
                    </Suspense>
                </DialogContent>
            </Dialog>

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