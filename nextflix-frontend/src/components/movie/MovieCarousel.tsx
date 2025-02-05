import React from 'react'
import { Carousel, CarouselContent } from '../ui/carousel'
import MovieCard from './MovieCard'
import { mediaType, Movie } from '@/types/movie.interface'
import { Locale } from '@/lib/i18n/i18n-config'

type MovieCarouselProps = {
    title: string
    movies: Movie[]
    lang: Locale
    mediaType?: mediaType


}
export default function MovieCarousel({ title, movies, lang, mediaType }: MovieCarouselProps) {
    return (
        <div className='z-50 w-full flex flex-col gap-2'>
            <h2 className=' text-2xl font-bold'>{title}</h2>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full">
                <CarouselContent className="gap-2 p-2">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} lang={lang} mediaType={mediaType} />
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export const MovieCarouselLoadding = () => {
    return <div className='w-full animate-pulse flex flex-col gap-4'>
        <div className='w-1/6 h-10 bg-black/20 dark:bg-gray-800 rounded-lg'></div>
        <div className=' h-full flex flex-row gap-4'>
            <div className='w-32 md:w-40 h-52 bg-black/20  dark:bg-gray-800 rounded-lg'></div>
            <div className='w-32 md:w-40 h-52 bg-black/20 dark:bg-gray-800 rounded-lg'></div>
            <div className='w-32 md:w-40 h-52 bg-black/20 dark:bg-gray-800 rounded-lg'></div>
        </div>
    </div>
}
