import React from "react";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import { detailsMovie } from "@/types/detailMovie.interface";
import { formatRuntime, getYear } from "@/lib/utils";

type MovieDetailsHeaderProps = {
    movie: detailsMovie;
};

export default function MovieDetailsHeader({ movie }: MovieDetailsHeaderProps) {
    const isTVShow = !!movie.number_of_seasons;

    return (
        <div className="flex flex-col justify-end items-start md:items-start relative h-[40vh] md:h-auto">
            {/* Movie Backdrop (Mobile Only) */}
            {movie.backdrop_path && (
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.name ?? movie.title}
                    fill
                    className="object-cover object-center md:hidden"
                />
            )}

            {/* Movie Information */}
            <div className="w-full px-4 md:px-0 flex flex-row justify-between gap-2 dark:bg-gradient-to-t from-black to-transparent z-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold shadow-2xl">{movie.name ?? movie.title}</h1>

                    {/* Release Year & Runtime / Seasons */}
                    <p className="text-[#7e7e7e] font-medium text-sm">
                        {getYear(movie.release_date ?? movie.last_air_date)}{" "}
                        {isTVShow
                            ? `| ${movie.number_of_seasons} Season${movie.number_of_seasons ?? 0 > 1 ? "s" : ""}`
                            : movie.runtime
                                ? `| ${formatRuntime(movie.runtime)}`
                                : ""}
                        {movie.number_of_episodes ? ` | ${movie.number_of_episodes} Episodes` : ""}
                    </p>
                </div>

                {/* Movie Rating */}
                <div className="flex flex-row gap-2 text-2xl items-center font-medium">
                    {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                    <IoStar className="text-yellow-500" />
                </div>
            </div>
        </div>
    );
}