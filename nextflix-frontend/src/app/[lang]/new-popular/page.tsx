import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Locale } from "@/lib/i18n/i18n-config";
import MoviesPopularPage from "@/components/movie/MoviePopularPage";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <MoviesPopularPage dict={dict} lang={lang} />
  );
}