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
            {/* md:basis-64 */}
            <CarouselItem className="pl-1 basis-30 md:basis-40 h-[200px]  relative rounded-md overflow-hidden">
                <Image
                    src={movie.poster_path}
                    alt={movie.original_title || "Movie"}
                    fill
                    className="object-cover object-center"
                />

                {movie.ranking ?? "-"}

                {
                    movie.ranking && movie.ranking <= 10 && (
                        <div className="absolute top-0 right-0 ">
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
