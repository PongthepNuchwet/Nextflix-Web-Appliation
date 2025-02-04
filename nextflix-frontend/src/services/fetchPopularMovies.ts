'use server';

import { Locale } from "@/lib/i18n/i18n-config";
import { Movie } from "@/types/movie.interface";

type Props = {
    mediaType: 'movie' | 'tv';
    lang: Locale;
    page?: number;
};

export const fetchPopularMovies = async ({ mediaType, lang, page = 1 }: Props): Promise<Movie[] | null> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}/moviedb/popular?mediaType=${mediaType}&lang=${lang}&page=${page}`,
            {
                method: 'GET',
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch popular movies: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error;
    }
};