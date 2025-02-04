'use server';

import { detailsMovie } from "@/types/detailMovie.interface";


type Props = {
    mediaType: 'movie' | 'tv';
    id: number;
    lang: string;
};

export const getMovieDetails = async ({ mediaType, id, lang }: Props): Promise<detailsMovie | null> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}/moviedb/details?mediaType=${mediaType}&id=${id}&lang=${lang}`,
            {
                method: 'GET',
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch movie details: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};