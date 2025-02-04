import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Locale } from "@/lib/i18n/i18n-config";
import ErrorMessage from "@/components/ErrorMessage";
import NoData from "@/components/NoData";
import { getMovieDetails } from "@/services/fetchMovieDetails";
import MovieDetailsPage from "@/components/movie/MovieDetailsPage";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale, movie_id: string }>

}) {
  const lang = (await params).lang;
  const movie_id = (await params).movie_id;

  const dict = await getDictionary(lang);

  try {
    if (Number.isInteger(parseInt(movie_id)) === false) {
      throw new Error("Invalid movie id");
    }

    const movie = await getMovieDetails({ mediaType: "movie", id: parseInt(movie_id), lang });

    if (!movie) {
      return <NoData message={dict.no_movies_available} />;
    }

    return (
      <MovieDetailsPage movie={movie} lang={lang} dict={dict} mediaType="movie" />
    );

  } catch (error) {
    console.error("Error fetching movies:", error);
    return <ErrorMessage  fullScreen  message={dict.error_fetch_movies} />;
  }
}