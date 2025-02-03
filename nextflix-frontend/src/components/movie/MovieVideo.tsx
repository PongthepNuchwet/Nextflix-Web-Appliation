import { getOneMovieVideos } from '@/services/fetchMovieVideos';
import { Locale } from '@/lib/i18n/i18n-config';
import { Movie } from '@/types/movie.interface';
import React from 'react'
import NoData from '../NoData';
import ErrorMessage from '../ErrorMessage';
import MovieYoutubeEmbed from './MovieYoutubeEmbed';


type MovieVideoProps = {
    movie: Movie
    lang: Locale
}

export default async function MovieVideo({ movie, lang }: MovieVideoProps) {
    try {
        const video = await getOneMovieVideos({ mediaType: movie.media_type, lang, id: movie.id });

        if (!video) {
            return <NoData message="No " />;
        }

        return (
            <MovieYoutubeEmbed videoId={video.key} />
        );

    } catch (error) {
        console.error("Error fetching movies:", error);
        return <ErrorMessage message="" />;
    }
}
