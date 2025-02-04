import React from 'react'
import NoData from '../NoData';
import MovieCarousel from './MovieCarousel';
import ErrorMessage from '../ErrorMessage';
import { DictionaryType } from '@/types/dictionaries';
import { Locale } from '@/lib/i18n/i18n-config';
import { fetchPopularMovies } from '@/services/fetchPopularMovies';

type MoviePopularProps = {
    dict: DictionaryType
    lang: Locale;
}
export default async function MoviePopular({ lang, dict }: MoviePopularProps) {
    try {
        const movies = await fetchPopularMovies({ mediaType: "movie", lang: lang, page: 1 });

        if (!movies || movies.length === 0) {
            return <NoData message={dict.no_movies_available} />;
        }

        return (
            <MovieCarousel title={dict.popular_movies} movies={movies} lang={lang} />
        );

    } catch (error) {
        console.error("Error fetching movies:", error);
        return <ErrorMessage message={dict.error_fetch_movies} />;
    }
}
