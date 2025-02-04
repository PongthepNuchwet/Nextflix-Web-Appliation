'use server';

import { Movie } from "@/types/movie.interface";

type Props = {
    mediaType: 'movie' | 'tv' | 'all';
    frequency: 'day' | 'week';
    lang: string;
};

export const getTrendingMovies = async ({ mediaType, frequency, lang }: Props): Promise<Movie[] | null> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}/moviedb/trending?mediaType=${mediaType}&frequency=${frequency}&lang=${lang}`,
            {
                method: 'GET',
                next: { revalidate: 60 }
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch trending movies: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        throw error;
    }
};