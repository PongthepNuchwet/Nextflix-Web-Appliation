import { Locale } from '@/lib/i18n/i18n-config';
import { DictionaryType } from '@/types/dictionaries';
import React, { Suspense } from 'react'
import MoviePopular from './MoviePopular';
import { MovieCarouselLoadding } from './MovieCarousel';
import TVPopular from './TVPopular';
import MovieUpcoming from './MovieUpcoming';

type MoviesPopularPageProps = {
    dict: DictionaryType
    lang: Locale;
};

export default async function MoviesPopularPage({ dict, lang }: MoviesPopularPageProps) {
    return (
        <div className='pt-30 px-5 sm:px-9 lg:px-20 md:pt-30  flex flex-col gap-4'>
            <Suspense fallback={<MovieCarouselLoadding />} >
                <MoviePopular lang={lang} dict={dict} />
            </Suspense>
            <Suspense fallback={<MovieCarouselLoadding />} >
                <TVPopular lang={lang} dict={dict} />
            </Suspense>
            <Suspense fallback={<MovieCarouselLoadding />} >
                <MovieUpcoming lang={lang} dict={dict} />
            </Suspense>
        </div>
    );

}


