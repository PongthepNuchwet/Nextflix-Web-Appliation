import React from "react";
import Image from "next/image";
import { Movie } from "@/types/movie.interface";
import { MovieImages } from "@/types/images-movie.interface";
import Top10 from "./Top10";
import ActionMovieScreen from "./ActionMovieScreen";
import CarouselMovie from "./CarouselMovie";
import BackgroudFullScreen from "./BackgroudFullScreen";

type Props = {
  movies: Movie[];
  images: MovieImages;
  isTopRated?: boolean;
  rank?: number;
};

export default function MoviePage({ movies, images, isTopRated, rank }: Props) {

  const topMovie = movies.reduce((prev, current) =>
    current.popularity > prev.popularity ? current : prev
  );

  const logo = images.logos.length > 0 ? images.logos[0] : null;


  return (
    <div className="relative  w-screen h-screen bg-black">

      {/* Background Image */}
      <BackgroudFullScreen imagePath={topMovie.backdrop_path} title={topMovie.title || 'Movie'} />

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 right-0 top-0  p-0  md:pl-10  z-20 text-white flex flex-col items-start justify-end">

        {/* md:mb-[20vh] */}
        <div className="flex flex-col justify-end md:justify-center items-center md:items-start gap-2 md:gap-4 md:max-w-[35vw] px-10 md:px-0 mb-0 md:mb-[10vh]">
          {/* Movie Logo (With Fallback) */}
          {logo && (
            <Image
              src={`https://image.tmdb.org/t/p/original${logo.file_path}`}
              width={logo.width}
              height={logo.height}
              className="w-[70vw] md:w-[35vw]"
              alt={topMovie.title || "Movie Logo"}
              priority
            />
          )}

          {/* Top 10 Badge + Rank */}
          <div className="flex flex-row items-center justify-center gap-x-1 md:gap-x-2 text-lg md:text-3xl font-bold">
            {isTopRated && <Top10 width={30} height={30} />}
            {rank && <p>#{rank}</p>}
            <p>IN {topMovie.media_type === "movie" ? "Movies" : "TV Shows"} Today</p>
          </div>

          {/* Movie Overview */}
          {topMovie.overview ? (
            <p className="line-clamp-3 text-sm md:text-xl">{topMovie.overview}</p>
          ) : (
            <p className="text-xl opacity-50">No description available.</p>
          )}

          <ActionMovieScreen movieID={topMovie.id} />
        </div>

        <div className=" z-20 md:pb-10  w-full bg-gradient-to-t from-black to-transparent">
          <CarouselMovie title="Popular on Netflix" movies={movies} />
        </div>
      </div>
    </div>
  );
}