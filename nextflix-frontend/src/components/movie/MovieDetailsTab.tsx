import React, { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { detailsMovie } from "@/types/detailMovie.interface";
import MovieVideo, { MovieVideoLoading } from "./MovieVideo";
import { Locale } from "@/lib/i18n/i18n-config";
import { mediaType } from "@/types/movie.interface";
import { DictionaryType } from "@/types/dictionaries";

type MovieDetailsTabProps = {
    movie: detailsMovie;
    lang: Locale;
    mediaType: mediaType;
    dict: DictionaryType;
};

const TabTrigger = ({ value, label }: { value: string; label: string }) => (
    <TabsTrigger
        value={value}
        className="uppercase text-md rounded-none data-[state=active]:border-b-3 data-[state=active]:border-red-600 data-[state=active]:text-white transition-all"
    >
        {label}
    </TabsTrigger>
);

const formatList = (items?: { name: string }[], fallback = "-") => {
    return items && items.length > 0 ? items.map((item) => item.name).join(", ") : fallback;
};

export default function MovieDetailsTab({ movie, lang, mediaType, dict }: MovieDetailsTabProps) {
    return (
        <div className="w-full mt-6">
            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full px-4 md:px-0">
                <TabsList className="flex flex-row gap-4 items-start justify-start bg-transparent border-b border-transparent ">
                    <TabTrigger value="overview" label={dict.overview} />
                    <TabTrigger value="video" label={dict.video} />
                </TabsList>

                {/* Overview Content */}
                <TabsContent value="overview" className="mt-4 flex flex-col gap-4">
                    {/* Movie Overview */}
                    <p className="text-gray-300">{movie.overview || dict.no_description_available}</p>

                    {/* Movie Metadata */}
                    {[
                        { label: dict.genres, value: formatList(movie.genres) },
                        { label: dict.production, value: formatList(movie.production_companies) },
                        { label: dict.country, value: formatList(movie.production_countries) },
                        { label: dict.language, value: formatList(movie.spoken_languages?.map(lang => ({ name: lang.english_name }))) },
                    ].map((item, index) => (
                        <p key={index}>
                            <span className="font-medium mr-6 text-[#7e7e7e]">{item.label}:</span>
                            {item.value}
                        </p>
                    ))}
                </TabsContent>

                {/* Video Tab Content */}
                <TabsContent value="video" className="flex flex-col">
                    <Suspense fallback={<MovieVideoLoading />}>
                        <MovieVideo movie_id={movie.id} lang={lang} mediaType={mediaType} />
                    </Suspense>
                </TabsContent>
            </Tabs>
        </div>
    );
}