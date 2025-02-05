import React from "react";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import { detailsMovie } from "@/types/detailMovie.interface";
import { formatRuntime, getYear } from "@/lib/utils";

type MovieDetailsHeaderProps = {
    movie: detailsMovie;
};

export default function MovieDetailsHeader({ movie }: MovieDetailsHeaderProps) {
    const title = movie.name ?? movie.title;
    const isTVShow = !!movie.number_of_seasons;
    const releaseYear = getYear(movie.release_date ?? movie.last_air_date);
    const seasonsInfo = isTVShow ? formatSeasons(movie.number_of_seasons, movie.number_of_episodes) : "";
    const runtimeInfo = !isTVShow && movie.runtime ? `| ${formatRuntime(movie.runtime)}` : "";

    return (
        <div className="flex flex-col justify-end items-start md:items-start relative h-[40vh] md:h-auto">
            {/* Movie Backdrop (Mobile Only) */}
            {movie.backdrop_path && <MovieBackdrop imagePath={movie.backdrop_path} title={title} />}

            {/* Movie Information */}
            <div className="w-full px-4 md:px-0 flex flex-row justify-between gap-2 dark:bg-gradient-to-t from-black to-transparent z-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold shadow-2xl">{title}</h1>
                    <p className="text-[#7e7e7e] font-medium text-sm">
                        {releaseYear} {seasonsInfo} {runtimeInfo}
                    </p>
                </div>

                {/* Movie Rating */}
                <MovieRating rating={movie.vote_average} />
            </div>
        </div>
    );
}

const MovieBackdrop = ({ imagePath, title }: { imagePath: string; title: string }) => (
    <Image
        src={`https://image.tmdb.org/t/p/original${imagePath}`}
        alt={title}
        fill
        className="object-cover object-center md:hidden"
    />
);

const MovieRating = ({ rating }: { rating?: number }) => (
    <div className="flex flex-row gap-2 text-2xl items-center font-medium">
        {rating ? rating.toFixed(1) : "N/A"}
        <IoStar className="text-yellow-500" />
    </div>
);

const formatSeasons = (seasons?: number, episodes?: number) => {
    if (!seasons) return "";
    const seasonText = seasons > 1 ? "Seasons" : "Season";
    const episodeText = episodes ? ` | ${episodes} Episodes` : "";
    return `| ${seasons} ${seasonText}${episodeText}`;
};