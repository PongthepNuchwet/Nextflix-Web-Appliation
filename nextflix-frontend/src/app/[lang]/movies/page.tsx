import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Locale } from "@/lib/i18n/i18n-config";
import MoviePage from "@/components/movie/MoviePage";
import { getTrendingMovies } from "@/services/fetchTrendingMovies";
import { Suspense } from "react";
import ErrorMessage from "@/components/ErrorMessage";
import NoData from "@/components/NoData";

export default async function Page({
  params,
}: {
  params: { lang: Locale };
}) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  try {
    const movies = await getTrendingMovies({ frequency: "day", mediaType: "movie", lang });

    if (!movies || movies.length === 0) {
      return <NoData message={dict.no_movies_available} />;
    }

    return (
      <Suspense fallback={<div>{dict.loading}</div>}>
        <MoviePage movies={movies} dict={dict} lang={lang} />
      </Suspense>
    );

  } catch (error) {
    console.error("Error fetching movies:", error);
    return <ErrorMessage message={dict.error_fetch_movies} />;
  }
}