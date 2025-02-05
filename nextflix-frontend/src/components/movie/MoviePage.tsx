import React from "react";

import { Movie } from "@/types/movie.interface";
import { DictionaryType } from "@/types/dictionaries";
import { Locale } from "@/lib/i18n/i18n-config";

import MovieTop10Badge from "./MovieTop10Badge";
import MovieActionButtons from "./MovieActionButtons";
import MovieCarousel from "./MovieCarousel";
import MovieBackground from "./MovieBackground";
import MovieLogo from "./MovieLogo";

type MoviePageProps = {
  movies: Movie[];
  dict: DictionaryType
  lang: Locale;
};

export default function MoviePage({ movies, dict, lang }: MoviePageProps) {

  const topMovie = movies.reduce((prev, current) =>
    current.popularity > prev.popularity ? current : prev
  );

  return (
    <div className="relative  w-screen h-screen bg-black">

      {/* Background Image */}
      <MovieBackground imagePath={topMovie.backdrop_path} title={topMovie.title || 'Movie'} />

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 right-0 top-0  p-0 pt-20  pl-4 md:pl-10  z-20 text-white flex flex-col items-start justify-end">

        <div className="grow flex flex-col justify-end md:justify-center items-center md:items-start gap-2 md:gap-4 md:max-w-[35vw] px-10 md:px-0 mb-0">
          {/* Movie Logo (With Fallback) */}
          <MovieLogo movie={topMovie} dict={dict} lang={lang} />


          {/* Top 10 Badge + Rank */}
          <div className="animate-fade-left flex flex-row items-center justify-center gap-x-1 md:gap-x-2 text-lg md:text-3xl font-bold">
            <MovieTop10Badge width={30} height={30} />
            {topMovie.ranking && <p>#{topMovie.ranking}</p>}
            <p>{dict.in} {topMovie.media_type === "movie" ? dict.movies : dict.tv_shows} {dict.today}</p>
          </div>

          {/* Movie Overview */}
          {topMovie.overview ? (
            <p className="animate-fade-left line-clamp-3 text-sm md:text-xl">{topMovie.overview}</p>
          ) : (
            <p className=" animate-fade-left text-xl opacity-50">{dict.no_description}</p>
          )}

          <MovieActionButtons movie={topMovie} dict={dict} lang={lang} />
        </div>

        <div className="z-20 md:pb-10  w-full bg-gradient-to-t from-black to-transparent">
          <MovieCarousel title={dict.popular_on_netflix} movies={movies} lang={lang} />
        </div>
      </div>
    </div>
  );
}