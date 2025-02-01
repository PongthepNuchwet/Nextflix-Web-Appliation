import { getDictionary } from "@/app/lib/i18n/get-dictionary";
import { Locale } from "@/app/lib/i18n/i18n-config";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return <div>{dict.hello}</div>;
}
