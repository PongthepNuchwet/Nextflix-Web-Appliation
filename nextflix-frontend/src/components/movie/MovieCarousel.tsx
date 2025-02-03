import React from 'react'
import { Carousel, CarouselContent } from '../ui/carousel'
import MovieCard from './MovieCard'
import { Movie } from '@/types/movie.interface'

type MovieCarouselProps = {
    title: string
    movies: Movie[]
}
export default function MovieCarousel({ title, movies }: MovieCarouselProps) {
    return (
        <div className='z-50 w-full flex flex-col gap-2'>
            <h2 className='text-white text-2xl font-bold'>{title}</h2>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full">
                <CarouselContent className="gap-2 p-2">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
