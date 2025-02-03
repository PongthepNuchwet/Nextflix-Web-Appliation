import React from 'react'
import { CarouselItem } from '../ui/carousel'
import Image from 'next/image'
import { Movie } from '@/types/movie.interface'

type MovieCardProps = {
    movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
    return (
        <>
            <CarouselItem
                className="pl-1 basis-30 md:basis-40 h-[200px] relative rounded-md overflow-hidden group transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer"
            >
                {/* Movie Poster */}
                <Image
                    src={movie.poster_path}
                    alt={movie.original_title || "Movie"}
                    fill
                    className="object-cover object-center"
                />

                {/* Top 10 Badge */}
                {
                    movie.ranking && movie.ranking <= 10 && (
                        <div className="absolute top-0 right-0 transition-all duration-300 group-hover:scale-110">
                            <Image
                                src={'/vector/card-top10.svg'}
                                alt={movie.original_title || "Movie"}
                                width={36}
                                height={50}
                            />
                        </div>
                    )
                }
            </CarouselItem>
        </>
    )
}