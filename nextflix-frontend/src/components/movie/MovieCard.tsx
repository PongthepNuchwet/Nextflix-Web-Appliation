"use client";
import React from 'react'
import { CarouselItem } from '../ui/carousel'
import Image from 'next/image'
import { mediaType, Movie } from '@/types/movie.interface'
import { useRouter } from 'next/navigation'
import { Locale } from '@/lib/i18n/i18n-config';


type MovieCardProps = {
    movie: Movie
    mediaType?: mediaType
    lang: Locale
}

export default function MovieCard({ movie, lang, mediaType }: MovieCardProps) {
    const router = useRouter()

    const onMovieClick = () => {
        const media_type = mediaType ?? movie.media_type
        const rename_path = media_type === 'movie' ? 'movies' : media_type === 'tv' ? 'tvshows' : ''
        if (!rename_path) return
        router.push(`/${lang}/${rename_path}/${movie.id}`)
    }

    const isNewSeason = (releaseDate?: string): boolean => {
        if (!releaseDate) return false;

        const releaseDateObj = new Date(releaseDate);
        const currentDate = new Date();
        const diffInDays = Math.floor(
            (currentDate.getTime() - releaseDateObj.getTime()) / (1000 * 60 * 60 * 24)
        );

        return diffInDays <= 30;
    };

    return (
        <>
            <CarouselItem
                onClick={onMovieClick}
                className="pl-1 basis-30 md:basis-40 h-[200px] relative rounded-md overflow-hidden group transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer"
            >
                {/* Movie Poster */}
                <Image
                    src={movie.poster_path}
                    alt={movie.original_title || "Movie"}
                    fill
                    quality={50}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover object-center"

                />

                {/* Top 10 Badge */}
                {movie.ranking && movie.ranking <= 10 && <TopBadge />}

                {/* New Season Badge */}
                {isNewSeason(movie.release_date ?? movie.first_air_date) && <NewSeasonBadge />}

            </CarouselItem>
        </>
    )
}

const TopBadge = () => (
    <div className="absolute top-0 right-0 transition-all duration-300 group-hover:scale-110">
        <Image src="/vector/card-top10.svg" alt="Top 10" width={36} height={50} />
    </div>
);

const NewSeasonBadge = () => (
    <div className="absolute bottom-0 left-0 transition-all duration-300 group-hover:scale-110">
        <Image src="/vector/card-new-season.svg" alt="New Season" width={50} height={70} />
    </div>
);