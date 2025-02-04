import { getOneMovieVideos } from '@/services/fetchMovieVideos';
import { Locale } from '@/lib/i18n/i18n-config';
import { mediaType } from '@/types/movie.interface';

import NoData from '../NoData';
import ErrorMessage from '../ErrorMessage';
import MovieYoutubeEmbed from './MovieYoutubeEmbed';


type MovieVideoProps = {
    mediaType: mediaType
    movie_id: number
    lang: Locale
}

export default async function MovieVideo({ mediaType, lang, movie_id }: MovieVideoProps) {
    try {
        const video = await getOneMovieVideos({ mediaType, lang, id: movie_id });

        if (!video) {
            return <NoData message="No video available for this movie." />;
        }

        return <MovieYoutubeEmbed videoId={video.key} />;
    } catch (error) {
        console.error("Error fetching movie video:", error);
        return <ErrorMessage message="Failed to load movie video. Please try again later." />;
    }
}



export function MovieVideoLoading() {
    return (
        <div className="animate-pulse w-full p-4">
            <div className="h-30 bg-gray-800 rounded w-full"></div>
        </div>
    )
}
