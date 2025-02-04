import { detailsMovie } from "@/types/detailMovie.interface";
import React from "react";
import Image from "next/image";
import MovieDetailsHeader from "./MovieDetailsHeader";
import MovieDetailsTab from "./MovieDetailsTab";
import { DictionaryType } from "@/types/dictionaries";
import { Locale } from "@/lib/i18n/i18n-config";
import { mediaType } from "@/types/movie.interface";

type MovieDetailsPageProps = {
    movie: detailsMovie;
    dict: DictionaryType;
    lang: Locale;
    mediaType: mediaType;
};

export default function MovieDetailsPage({
    movie,
    mediaType,
    lang,
    dict,
}: MovieDetailsPageProps) {
    return (
        <div className="sm:px-10 md:px-20 md:pt-30 bg-white dark:bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Movie Poster */}
                <div className="flex justify-center md:justify-start">
                    <div className="hidden md:block w-3/5 sm:w-4/5 h-[80vh] relative bg-gray-800 rounded-lg overflow-hidden">
                        <Image
                            src={movie.backdrop_path}
                            alt={movie.title || "Movie Poster"}
                            fill
                            className="object-cover object-center "
                        />
                    </div>
                </div>

                {/* Movie Details */}
                <div className="flex flex-col gap-6">
                    <MovieDetailsHeader movie={movie} />
                    <MovieDetailsTab movie={movie} mediaType={mediaType} lang={lang} dict={dict} />
                </div>
            </div>
        </div>
    );
}