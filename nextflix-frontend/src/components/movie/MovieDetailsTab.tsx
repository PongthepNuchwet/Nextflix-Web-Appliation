import React, { Suspense, lazy } from "react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { detailsMovie } from "@/types/detailMovie.interface";
import { Locale } from "@/lib/i18n/i18n-config";
import { mediaType } from "@/types/movie.interface";
import { DictionaryType } from "@/types/dictionaries";

const MovieVideo = lazy(() => import("./MovieVideo"));
import { MovieVideoLoading } from "./MovieVideo";
import { formatList } from "@/lib/formatList";
import { TabTrigger } from "../ui/tabs/TabTrigger";

// Props Definition
type MovieDetailsTabProps = {
    movie: detailsMovie;
    lang: Locale;
    mediaType: mediaType;
    dict: DictionaryType;
};

// Metadata Section Component
const MovieMetadata = ({ movie, dict }: { movie: detailsMovie; dict: DictionaryType }) => {
    const metadata = [
        { label: dict.genres, value: formatList(movie.genres) },
        { label: dict.production, value: formatList(movie.production_companies) },
        { label: dict.country, value: formatList(movie.production_countries) },
        { label: dict.language, value: formatList(movie.spoken_languages?.map(lang => ({ name: lang.english_name }))) },
    ];

    return (
        <>
            {metadata.map((item, index) => (
                <p key={index}>
                    <span className="font-medium mr-6 text-muted-foreground">{item.label}:</span>
                    {item.value}
                </p>
            ))}
        </>
    );
};

// Main Component
export default function MovieDetailsTab({ movie, lang, mediaType, dict }: MovieDetailsTabProps) {
    return (
        <div className="w-full">
            <Tabs defaultValue="overview" className="w-full px-4 md:px-0">
                {/* Tabs List */}
                <TabsList className="flex flex-row gap-4 items-start justify-start bg-transparent border-b border-transparent">
                    <TabTrigger value="overview" label={dict.overview} />
                    <TabTrigger value="video" label={dict.video} />
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="mt-4 flex flex-col gap-4">
                    <p className="dark:text-gray-300">{movie.overview || dict.no_description_available}</p>
                    <MovieMetadata movie={movie} dict={dict} />
                </TabsContent>

                {/* Video Tab (Lazy Loaded) */}
                <TabsContent value="video" className="flex flex-col">
                    <Suspense fallback={<MovieVideoLoading />}>
                        <MovieVideo movie_id={movie.id} lang={lang} mediaType={mediaType} />
                    </Suspense>
                </TabsContent>
            </Tabs>
        </div>
    );
}