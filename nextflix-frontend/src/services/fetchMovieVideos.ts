'use server';

import { i18n } from "@/lib/i18n/i18n-config";
import { Video } from "@/types/videoMovie.interface";

type Props = {
    mediaType: 'movie' | 'tv';
    id: number;
    lang?: string;
};

export const getOneMovieVideos = async ({ mediaType, id, lang = i18n.defaultLocale }: Props): Promise<Video | null> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}/moviedb/videos?mediaType=${mediaType}&id=${id}&lang=${lang}`,
            {
                method: 'GET',
                cache: 'no-cache',
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch videos: ${response.statusText}`);
        }

        const data: Video = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movie videos:", error);
        throw error;
    }
};