import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider"
import { Noto_Sans_Thai} from 'next/font/google'

const noto_sans_thai = Noto_Sans_Thai({
  subsets: ['latin'],
  variable: '--font-noto-sans-thai',
  display: 'swap',
})

const netflix_sans = localFont({
  src: [
    {
      path: "../fonts/netflix_sans/NetflixSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/netflix_sans/NetflixSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/netflix_sans/NetflixSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/netflix_sans/NetflixSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-netflix-sans",
});

export const metadata: Metadata = {
  title: "Nextflix Web Appliation",
  description: "Nextflix Web Appliation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${netflix_sans.variable} ${noto_sans_thai.className} antialiased bg-white dark:bg-black `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
