import React, { Suspense } from "react";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline, IoMdAdd } from "react-icons/io";
import { DictionaryType } from "@/types/dictionaries";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import MovieVideo from "./MovieVideo";
import { Movie } from "@/types/movie.interface";
import { Locale } from "@/lib/i18n/i18n-config";
import Link from "next/link";

type MovieActionButtonsProps = {
    movie: Movie
    dict: DictionaryType
    lang: Locale;
};

export default function MovieActionButtons({ movie, dict, lang }: MovieActionButtonsProps) {
    return (
        <div className="flex flex-row items-center justify-evenly md:items-start md:justify-start gap-4 w-full">

            {/* My List (Mobile) */}
            <Button variant="ghost" className="cursor-pointer md:hidden text-white font-medium p-0 text-lg flex flex-col items-center gap-0 h-auto">
                <IoMdAdd style={{ width: 30, height: 30 }} />
                {dict.my_list}
            </Button>

            {/* Play Button */}
            <Dialog >
                <DialogTrigger asChild>
                    <Button variant="default" className="cursor-pointer  font-medium text-lg flex items-center gap-2">
                        <FaPlay size={20} />
                        {dict.play}
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-white dark:bg-black border-none md:min-w-2xl lg:min-w-4xl p-0 pb-6" autoFocus={false}>
                    <DialogHeader className="m-0">
                        < DialogTitle className="text-black dark:text-white p-4">
                            {movie.title || movie.name}
                        </DialogTitle>
                    </DialogHeader>
                    <Suspense fallback={<div>{dict.loading}</div>}>
                        <MovieVideo lang={lang} movie_id={movie.id} mediaType={movie.media_type} />
                    </Suspense>
                </DialogContent>
            </Dialog>

            {/* Info Button  */}
            <Link href={`/${lang}/${movie.media_type == 'movie' ? 'movies' : 'tvshows'}/${movie.id.toString()}`} className=" flex flex-col  md:flex-row gap-0 md:gap-2 md:bg-[#515451] md:rounded-md items-center  cursor-pointer px-4 py-1.5 p-0 font-medium text-white  text-lg  h-auto">
                <IoMdInformationCircleOutline style={{ width: 30, height: 30 }} />
                <span className="md:hidden">{dict.info}</span>
                <span className=" hidden md:inline-block">{dict.more_info}</span>
            </Link>

        </div>
    );
}