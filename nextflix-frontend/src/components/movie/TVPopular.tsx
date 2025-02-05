import React from 'react'
import NoData from '../NoData';
import MovieCarousel from './MovieCarousel';
import ErrorMessage from '../ErrorMessage';
import { DictionaryType } from '@/types/dictionaries';
import { Locale } from '@/lib/i18n/i18n-config';
import { fetchPopularMovies } from '@/services/fetchPopularMovies';

type TVPopularProps = {
    dict: DictionaryType
    lang: Locale;
}
export default async function TVPopular({ lang, dict }: TVPopularProps) {
    try {
        const movies = await fetchPopularMovies({ mediaType: "tv", lang: lang, page: 1 });

        if (!movies || movies.length === 0) {
            return <NoData message={dict.no_movies_available} />;
        }

        return (
            <MovieCarousel title={dict.popular_tv_shows} movies={movies} lang={lang} mediaType='tv' />
        );

    } catch (error) {
        console.error("Error fetching TV Shows:", error);
        return (
            <div className='z-50 w-full flex flex-col gap-2'>
                <h2 className=' text-2xl font-bold'>{dict.popular_tv_shows}</h2>
                <ErrorMessage message={dict.error_fetch_movies} />
            </div>
        )

    }
}
