import { getMovieImages } from '@/services/fetchMovieImages.ts'
import { Locale } from '@/lib/i18n/i18n-config'
import { Movie } from '@/types/movie.interface'
import React, { Suspense } from 'react'
import { DictionaryType } from '@/types/dictionaries'
import Image from 'next/image'
import NoData from '../NoData'

type MovieLogoProps = {
    movie: Movie;
    lang: Locale;
    dict: DictionaryType;
}

export default async function MovieLogo({ movie, lang, dict }: MovieLogoProps) {
    try {
        const movieImages = await getMovieImages({
            mediaType: movie.media_type,
            id: movie.id,
            lang: lang,
        });

        if (!movieImages || movieImages.logos.length === 0) {
            return <NoData message={dict.no_movies_available} />;
        }

        const logo = movieImages.logos[0];

        return (
            <Suspense fallback={<div>{dict.loading}</div>}>
                <Image
                    src={`${logo.file_path}`}
                    width={logo.width}
                    height={logo.height}
                    className="w-[70vw] md:w-[35vw] animate-fade-up max-h-[200px]"
                    alt={movie.title || "Movie Logo"}
                    priority
                />
            </Suspense>
        );
    } catch (error) {
        console.error("Error fetching movie images:", error);
        return <h1 className="text-4xl font-bold shadow-2xl">{movie.name ?? movie.title}</h1>
    }
}