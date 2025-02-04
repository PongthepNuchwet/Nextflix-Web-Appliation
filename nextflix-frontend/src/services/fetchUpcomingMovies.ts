'use server';

import { Movie } from "@/types/movie.interface";

type Props = {
    lang: string;
    page?: number;
};

export const fetchUpcomingMovies = async ({ lang, page = 1 }: Props): Promise<Movie[] | null> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}/moviedb/upcoming?lang=${lang}&page=${page}`,
            {
                method: 'GET',
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch upcoming movies: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching upcoming movies:", error);
        throw error;
    }
};