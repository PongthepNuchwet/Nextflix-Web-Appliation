import TapBar from "@/components/layout/TopBar";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Locale } from "@/lib/i18n/i18n-config";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>
}) {

  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <main>
      <TapBar dict={dict} lang={lang} />
      {children}
    </main>
  );
}
