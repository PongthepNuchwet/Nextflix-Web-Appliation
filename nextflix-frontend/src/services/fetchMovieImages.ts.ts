'use server';

import { i18n } from "@/lib/i18n/i18n-config";
import { MovieImages } from "@/types/imagesMovie.interface";

type Props = {
    mediaType: 'movie' | 'tv';
    id: number;
    lang?: string;
};

export const getMovieImages = async ({ mediaType, id, lang = i18n.defaultLocale }: Props): Promise<MovieImages | null> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}/moviedb/images?mediaType=${mediaType}&id=${id}&lang=${lang}`,
            {
                method: 'GET',
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch images: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movie images:", error);
        throw error;
    }
};