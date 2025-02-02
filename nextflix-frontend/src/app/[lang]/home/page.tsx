import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Locale } from "@/lib/i18n/i18n-config";
import MoviePage from "@/components/movie/MoviePage";
import { MovieImages } from "@/types/images-movie.interface";
import { Movie } from "@/types/movie.interface";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  console.log(dict);
  const movies: Movie[] = [
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
        "id": 939243,
        "title": "Sonic the Hedgehog 3",
        "original_title": "Sonic the Hedgehog 3",
        "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
        "poster_path": "https://image.tmdb.org/t/p/w500/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            28,
            878,
            35,
            10751
        ],
        "popularity": 4770.711,
        "release_date": "2024-12-19",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1359,
        "ranking": 1
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/vYqt6kb4lcF8wwqsMMaULkP9OEn.jpg",
        "id": 1241982,
        "title": "Moana 2",
        "original_title": "Moana 2",
        "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
        "poster_path": "https://image.tmdb.org/t/p/w500/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            16,
            12,
            10751,
            35,
            9648
        ],
        "popularity": 2859.74,
        "release_date": "2024-11-21",
        "video": false,
        "vote_average": 7.196,
        "vote_count": 1151,
        "ranking": 2
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/v9Du2HC3hlknAvGlWhquRbeifwW.jpg",
        "id": 539972,
        "title": "Kraven the Hunter",
        "original_title": "Kraven the Hunter",
        "overview": "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
        "poster_path": "https://image.tmdb.org/t/p/w500/i47IUSsN126K11JUzqQIOi1Mg1M.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            28,
            878,
            12,
            14,
            53
        ],
        "popularity": 2594.062,
        "release_date": "2024-12-11",
        "video": false,
        "vote_average": 6.603,
        "vote_count": 957,
        "ranking": 3
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg",
        "id": 993710,
        "title": "Back in Action",
        "original_title": "Back in Action",
        "overview": "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.",
        "poster_path": "https://image.tmdb.org/t/p/w500/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            28,
            35
        ],
        "popularity": 2073.405,
        "release_date": "2025-01-15",
        "video": false,
        "vote_average": 6.666,
        "vote_count": 688,
        "ranking": 4
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/h7r6LZ32dgLwtwSW3CxoWIYD9pr.jpg",
        "id": 426063,
        "title": "Nosferatu",
        "original_title": "Nosferatu",
        "overview": "A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.",
        "poster_path": "https://image.tmdb.org/t/p/w500/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            27,
            14
        ],
        "popularity": 1515.687,
        "release_date": "2024-12-25",
        "video": false,
        "vote_average": 6.607,
        "vote_count": 1769,
        "ranking": 5
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/hctfNoMpQGfn3VXdBYb9p0P5bT5.jpg",
        "id": 1097549,
        "title": "Babygirl",
        "original_title": "Babygirl",
        "overview": "A high-powered CEO puts her career and family on the line when she begins a torrid affair with her much younger intern.",
        "poster_path": "https://image.tmdb.org/t/p/w500/A8HbTd0FemZyFCh5qvJFpHGiwF8.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            18
        ],
        "popularity": 1381.149,
        "release_date": "2024-12-25",
        "video": false,
        "vote_average": 5.705,
        "vote_count": 261,
        "ranking": 6
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/8dqZsevb5E8x29OFyr1neSp7bc9.jpg",
        "id": 933260,
        "title": "The Substance",
        "original_title": "The Substance",
        "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
        "poster_path": "https://image.tmdb.org/t/p/w500/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            27,
            878
        ],
        "popularity": 1078.969,
        "release_date": "2024-09-07",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 3551,
        "ranking": 7
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/mKIxSo3p1QKlsdegcOwapcbiV74.jpg",
        "id": 604685,
        "title": "Den of Thieves 2: Pantera",
        "original_title": "Den of Thieves 2: Pantera",
        "overview": "Big Nick is back on the hunt in Europe and closing in on Donnie, who is embroiled in the treacherous and unpredictable world of diamond thieves and the infamous Panther mafia, as they plot a massive heist of the world's largest diamond exchange.",
        "poster_path": "https://image.tmdb.org/t/p/w500/zLHq7fQA3xpck5UIHcRYgip5pQD.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            28,
            80,
            53
        ],
        "popularity": 947.441,
        "release_date": "2025-01-08",
        "video": false,
        "vote_average": 6.727,
        "vote_count": 132,
        "ranking": 8
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/4YN6AfYIKyfZ1aB0cYEWROv76nU.jpg",
        "id": 1064213,
        "title": "Anora",
        "original_title": "Anora",
        "overview": "A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as his parents set out to get the marriage annulled.",
        "poster_path": "https://image.tmdb.org/t/p/w500/7MrgIUeq0DD2iF7GR6wqJfYZNeC.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            10749,
            35,
            18
        ],
        "popularity": 768.016,
        "release_date": "2024-10-14",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 909,
        "ranking": 9
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/uKb22E0nlzr914bA9KyA5CVCOlV.jpg",
        "id": 402431,
        "title": "Wicked",
        "original_title": "Wicked",
        "overview": "In the land of Oz, ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda at Shiz University, and the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
        "poster_path": "https://image.tmdb.org/t/p/w500/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            18,
            10749,
            14
        ],
        "popularity": 674.858,
        "release_date": "2024-11-20",
        "video": false,
        "vote_average": 6.895,
        "vote_count": 1592,
        "ranking": 10
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/b3mdmjYTEL70j7nuXATUAD9qgu4.jpg",
        "id": 823219,
        "title": "Flow",
        "original_title": "Straume",
        "overview": "A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.",
        "poster_path": "https://image.tmdb.org/t/p/w500/imKSymKBK7o73sajciEmndJoVkR.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "lv",
        "genre_ids": [
            16,
            14,
            12
        ],
        "popularity": 564.849,
        "release_date": "2024-08-29",
        "video": false,
        "vote_average": 8.374,
        "vote_count": 988,
        "ranking": 11
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/sc1abgWNXc29wSBaerrjGBih06l.jpg",
        "id": 1084199,
        "title": "Companion",
        "original_title": "Companion",
        "overview": "A billionaire's death sets off a chain of events for Iris and her friends during a weekend trip to his lakeside estate.",
        "poster_path": "https://image.tmdb.org/t/p/w500/oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            27,
            878,
            35,
            53
        ],
        "popularity": 422.618,
        "release_date": "2025-01-22",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 78,
        "ranking": 12
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/s3FDBLH4qc1IcjexB05Qvbn3wxO.jpg",
        "id": 449443,
        "title": "Den of Thieves",
        "original_title": "Den of Thieves",
        "overview": "A gritty crime saga which follows the lives of an elite unit of the LA County Sheriff's Dept. and the state's most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank.",
        "poster_path": "https://image.tmdb.org/t/p/w500/dAP5NpkrMMczir5dUPjRR6ywqgz.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            28,
            80,
            53
        ],
        "popularity": 298.642,
        "release_date": "2018-01-18",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 2949,
        "ranking": 13
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/xaNBpBkONtupAVJqQBIW5EZa7xi.jpg",
        "id": 996821,
        "title": "You're Cordially Invited",
        "original_title": "You're Cordially Invited",
        "overview": "When two weddings are accidentally booked on the same day at the same venue, each bridal party is challenged with preserving their family's special moment while making the most of the unanticipated tight quarters. In a hilarious battle of determination and grit, the father of the bride and sister of the other bride chaotically go head-to-head as they stop at nothing to uphold an unforgettable celebration for their loved ones.",
        "poster_path": "https://image.tmdb.org/t/p/w500/ec50pMNyIshL0blt1q8dUEbIa2G.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            35
        ],
        "popularity": 194.281,
        "release_date": "2025-01-29",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 97,
        "ranking": 14
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/7bUYzlDz8eel1BVL1Y0YcF9NQmd.jpg",
        "id": 1059128,
        "title": "Queer",
        "original_title": "Queer",
        "overview": "1950. William Lee, an American expat in Mexico City, spends his days almost entirely alone, except for a few contacts with other members of the small American community. His encounter with Eugene Allerton, an expat former soldier, new to the city, shows him, for the first time, that it might be finally possible to establish an intimate connection with somebody.",
        "poster_path": "https://image.tmdb.org/t/p/w500/xe4b2TMciLKA1C0JlhWxb4ENLln.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            18,
            10749
        ],
        "popularity": 178.049,
        "release_date": "2024-11-27",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 150,
        "ranking": 15
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/4frrYwamVG0eXhdMTy3cpNNcCBp.jpg",
        "id": 1128650,
        "title": "The Prosecutor",
        "original_title": "誤判",
        "overview": "A poor young man is wrongly charged with drug trafficking after being deceived. An ex-prosecutor investigates the case, uncovers a corrupt lawyer team's scheme, and restores justice despite obstruction from evil forces.",
        "poster_path": "https://image.tmdb.org/t/p/w500/q8Wmy23507g5QI3J0kiMof3wlcb.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "cn",
        "genre_ids": [
            28,
            18,
            80,
            53
        ],
        "popularity": 137.733,
        "release_date": "2024-12-08",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 16,
        "ranking": 16
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/tKmIUX6xMczIrihDJnX4lfjwfco.jpg",
        "id": 1300607,
        "title": "Lucca's World",
        "original_title": "Los dos hemisferios de Lucca",
        "overview": "Determined to help her son, who has cerebral palsy, Bárbara takes her family to India for an experimental treatment.",
        "poster_path": "https://image.tmdb.org/t/p/w500/uNasqwBQvxMMRbtCRN6zCMlu4Kr.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "es",
        "genre_ids": [
            18
        ],
        "popularity": 103.457,
        "release_date": "2025-01-30",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 10,
        "ranking": 17
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/iYLKMV7PIBtFmtygRrhSiyzcVsF.jpg",
        "id": 277834,
        "title": "Moana",
        "original_title": "Moana",
        "overview": "In Ancient Polynesia, when a terrible curse incurred by Maui reaches an impetuous Chieftain's daughter's island, she answers the Ocean's call to seek out the demigod to set things right.",
        "poster_path": "https://image.tmdb.org/t/p/w500/9tzN8sPbyod2dsa0lwuvrwBDWra.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            12,
            35,
            10751,
            16
        ],
        "popularity": 73.247,
        "release_date": "2016-10-13",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 12800,
        "ranking": 18
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/7SU9JoNqrmLVwZNZZkvmeb8boK1.jpg",
        "id": 1309070,
        "title": "WWE Royal Rumble",
        "original_title": "WWE Royal Rumble",
        "overview": "Royal Rumble (2025) was the 38th annual Royal Rumble presented by World Wrestling Entertainment (WWE). The event took place on February 1, 2025 at the Lucas Oil Stadium in Indianapolis, Indiana, USA.",
        "poster_path": "https://image.tmdb.org/t/p/w500/pfwcQwARh7Gt2f8JEPxxiscqkpo.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [],
        "popularity": 58.324,
        "release_date": "2025-02-01",
        "video": true,
        "vote_average": 5.7,
        "vote_count": 8,
        "ranking": 19
    },
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w1280/bZsATFS6wg6L45ele7Ve4ogGkUT.jpg",
        "id": 60898,
        "title": "Erotic Ghost Story",
        "original_title": "聊齋艷譚",
        "overview": "Three vixens have meditated for 1,000 years to able to shed their animal natures and become human. For the final month of their rigors, they have moved near a village where women pray to a god of fertility. One sister visits the god's temple and thinks lustful thoughts. As she leaves, a priest confronts her, warning of dire consequences and of demons that will try to stop the vixens' transformation. Soon, the youngest sister saves a poor scholar from bandits and becomes enamored of him. Each sister visits him, and before long, the youth has made love to all three. After they invite him to stay with them, the playfulness takes a scary turn. Where can they turn for help?",
        "poster_path": "https://image.tmdb.org/t/p/w500/fTUCwsxVoLFuodAtlL6aITP1B45.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "cn",
        "genre_ids": [
            14,
            18,
            27
        ],
        "popularity": 54.494,
        "release_date": "1990-05-19",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 79,
        "ranking": 20
    }
]

  const images: MovieImages = {
    "id": 1241982,
    "backdrops": [
      {
        "aspect_ratio": 1.778,
        "height": 1080,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/rMrfAeUa0KL1EVuPzcq9LpsKPE4.jpg",
        "vote_average": 3.334,
        "vote_count": 1,
        "width": 1920
      },
      {
        "aspect_ratio": 1.778,
        "height": 1080,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/i9aoMJqpHs5DMWReTJ4snSDk9l.jpg",
        "vote_average": 3.334,
        "vote_count": 1,
        "width": 1920
      },
      {
        "aspect_ratio": 1.778,
        "height": 2160,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/5CAf9N4EfFYBJQPh3J4cbJxM088.jpg",
        "vote_average": 2.278,
        "vote_count": 3,
        "width": 3840
      },
      {
        "aspect_ratio": 1.777,
        "height": 1080,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/eWht396DtkYp9trfMYMyfCiirUS.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 1919
      },
      {
        "aspect_ratio": 1.778,
        "height": 2160,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/lNVEFt2FQVmOGiAaBMdgJW86Epa.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 3840
      },
      {
        "aspect_ratio": 1.778,
        "height": 2160,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/pgy1mO4cnnLKB4E31zY8VxGVTMW.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 3840
      },
      {
        "aspect_ratio": 1.778,
        "height": 2160,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/aV3fyabkDCQdQfZV3YQPeUKRPU6.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 3840
      },
      {
        "aspect_ratio": 1.778,
        "height": 2160,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/qk4zM7uy7T0AJMMyhOL5dueJoX4.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 3840
      },
      {
        "aspect_ratio": 1.778,
        "height": 720,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/bTR8JjJw2hjoXp3c7NlekkTxxgA.jpg",
        "vote_average": 0.166,
        "vote_count": 1,
        "width": 1280
      },
      {
        "aspect_ratio": 1.778,
        "height": 2160,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/lI0LPZhdzFD4dXMxzXxmP3EOfEt.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 3840
      },
      {
        "aspect_ratio": 1.778,
        "height": 1440,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/eWesJTqmoinUMspGXcuqW1gcPBW.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 2560
      },
      {
        "aspect_ratio": 1.778,
        "height": 2160,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/9qbnq1oLKW6K75liRzzywgJUcgu.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 3840
      },
      {
        "aspect_ratio": 1.778,
        "height": 2160,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/7ezxUMrugmDHTIomEvsAr3LqEDW.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 3840
      }
    ],
    "logos": [
      {
        "aspect_ratio": 5.596,
        "height": 2050,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/6y1b2fmGr4ZoIxMcQRBF0PQ6Sw.png",
        "vote_average": 10,
        "vote_count": 4,
        "width": 11472
      },
      {
        "aspect_ratio": 5.596,
        "height": 2050,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/sFzVGobXVnazwttzOo34nx0c4vF.png",
        "vote_average": 3.334,
        "vote_count": 2,
        "width": 11472
      },
      {
        "aspect_ratio": 5.596,
        "height": 2050,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/ar9Vk9HiX8VezlOLZHBUfHhEcPP.png",
        "vote_average": 3.334,
        "vote_count": 1,
        "width": 11472
      },
      {
        "aspect_ratio": 4.12,
        "height": 1036,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/MsWyOnSiTAHyaLMQp2Q1xGrKjZ.png",
        "vote_average": 3.334,
        "vote_count": 1,
        "width": 4268
      },
      {
        "aspect_ratio": 4.12,
        "height": 1036,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/eKTXNDoNRwj8xsjCQ22Xra1XNg3.png",
        "vote_average": 3.334,
        "vote_count": 1,
        "width": 4268
      },
      {
        "aspect_ratio": 4.466,
        "height": 814,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/w3VxtldVo4c77jBxVtJBGH4ps3f.png",
        "vote_average": 2.278,
        "vote_count": 3,
        "width": 3635
      },
      {
        "aspect_ratio": 5.476,
        "height": 349,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/4igvIZVduzMYA9PUCyXyO4coBMI.png",
        "vote_average": 0.166,
        "vote_count": 1,
        "width": 1911
      },
      {
        "aspect_ratio": 5.476,
        "height": 349,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/csRDOG0I1efBY9LwrIc6r8Kp19Y.png",
        "vote_average": 0.166,
        "vote_count": 2,
        "width": 1911
      },
      {
        "aspect_ratio": 5.476,
        "height": 349,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/1f4iDa2MKHnPrIJXok6d4WaZ2H0.png",
        "vote_average": 0.166,
        "vote_count": 1,
        "width": 1911
      },
      {
        "aspect_ratio": 5.493,
        "height": 71,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/zy4f35RIjYiLU4rfNqUszl7ZIeE.png",
        "vote_average": 0,
        "vote_count": 0,
        "width": 390
      },
      {
        "aspect_ratio": 3.933,
        "height": 297,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/b2SlecmVyezI5KkPRdyCjKo8q83.png",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1168
      }
    ],
    "posters": [
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
        "vote_average": 8.034,
        "vote_count": 10,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/m0SbwFNCa9epW1X60deLqTHiP7x.jpg",
        "vote_average": 6.834,
        "vote_count": 12,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg",
        "vote_average": 5.844,
        "vote_count": 16,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg",
        "vote_average": 5.476,
        "vote_count": 21,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/AjkPZPd3qrsXgA4azaaZt0ikDeN.jpg",
        "vote_average": 4.884,
        "vote_count": 13,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/sxuS6IcVF0T0dJgBv3x703m69Rr.jpg",
        "vote_average": 4.884,
        "vote_count": 13,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/khwDcPYD5xo6B8404mGGe6pYWtI.jpg",
        "vote_average": 4.722,
        "vote_count": 9,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/ArkgPJI5z3DhDbSznGGorbUBIAG.jpg",
        "vote_average": 4.3,
        "vote_count": 10,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/sBUfEJqMrgK7PP3gIQ2yTVNIosM.jpg",
        "vote_average": 3.334,
        "vote_count": 1,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/8dzLnIve9dCofVMvB3eFaD2Viiq.jpg",
        "vote_average": 3.334,
        "vote_count": 1,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/8Ces1tBI7SdVNa7qxN3GRcD460i.jpg",
        "vote_average": 2.278,
        "vote_count": 3,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/er1wWdj1r3Q1Eo1iffQTJsvO8su.jpg",
        "vote_average": 2.278,
        "vote_count": 3,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/8TvGHArrS47RES046An1NcD9s3E.jpg",
        "vote_average": 2.278,
        "vote_count": 3,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 2880,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/bRlgp6T11RDrMUaB2jbvtBaE9Kk.jpg",
        "vote_average": 2.066,
        "vote_count": 5,
        "width": 1920
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/1meRzfWs2jiSlNcDgpCd2dcOXi7.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/qGPOX5MD8zKg7k3ZcFTsrCvMPHw.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/nei2iX7rYgcEbssmR6Jh5Rxijjq.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/xyrVjSToRmy4yx4r5yBd4tXMRD.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/vp1NgrYRyJ1KDVYYBrWA7oiyPML.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 1500,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/bLIhurzgQOYDDdGIcNGh1tMIRUO.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 1000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/1GtS74RCcz8Wfl4uzk9wz5N01zj.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/8RBbCacsakfe4WdUAmK8sJ2BGVj.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/yKfKzaAYVHtESnWvwKmzWjWRCNF.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/oSe2b0vTFhYr39r4PoLyrm9weJn.jpg",
        "vote_average": 1.75,
        "vote_count": 2,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/nhHbVqC6hBRRaNbWdKOvQf0i7b6.jpg",
        "vote_average": 1.434,
        "vote_count": 5,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/eXBPDypPG5vsoH6es4QdDpO1Pt6.jpg",
        "vote_average": 1.222,
        "vote_count": 3,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 1455,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/720TEIkvYHUYHg1N7ShUxZmh0gu.jpg",
        "vote_average": 1.222,
        "vote_count": 3,
        "width": 970
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/y5OVSvVnoxYy2DFsyE7Wy2w4880.jpg",
        "vote_average": 1.222,
        "vote_count": 3,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 1455,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/9Q1hTyVWPiJcbFMsqsVdMcHHLql.jpg",
        "vote_average": 0.166,
        "vote_count": 2,
        "width": 970
      },
      {
        "aspect_ratio": 0.677,
        "height": 1477,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/gs69le2pjzW36ogL1tBUf63mB1D.jpg",
        "vote_average": 0.166,
        "vote_count": 1,
        "width": 1000
      },
      {
        "aspect_ratio": 0.666,
        "height": 1100,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/evg1h5O2QqvFG0X3NYmhKl5p2HR.jpg",
        "vote_average": 0.166,
        "vote_count": 1,
        "width": 733
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/8abDizVs9Mm9e9W9ZQpQ4Am8nfa.jpg",
        "vote_average": 0.166,
        "vote_count": 1,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/fQdU9YkArcyE8aAkQW4FICRfHYJ.jpg",
        "vote_average": 0.166,
        "vote_count": 1,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/uIyVUJpCDKUlbzWRaeeiLqJ2jkh.jpg",
        "vote_average": 0.166,
        "vote_count": 1,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/bla24ZcvtoZWWYNiAhD2gC3oYU1.jpg",
        "vote_average": 0.166,
        "vote_count": 1,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/a98NDO4RWT73EPsTGJQSdXfxLpD.jpg",
        "vote_average": 0.166,
        "vote_count": 1,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/he8VEWj6IuZei2a5Hlxc3XPkMrc.jpg",
        "vote_average": 0.166,
        "vote_count": 1,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/mYKpAxTWqD9ItgLnCHRo6hf72pq.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 2000
      },
      {
        "aspect_ratio": 0.676,
        "height": 2048,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/2p0wC52iBxnkkMdGz43dT0qbckO.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1384
      },
      {
        "aspect_ratio": 0.667,
        "height": 1609,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/zTYGYK6FeQAHb4mPornWM6jjfKQ.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1073
      },
      {
        "aspect_ratio": 0.675,
        "height": 2048,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/7SYW72v3swkqtTtiMd5FKmdplGn.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1383
      },
      {
        "aspect_ratio": 0.675,
        "height": 1600,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/zCDJIRAhTs0cbhxgDY2caKuSHLa.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1080
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/sCQJeWrJYljcSvevmJ1WJeAxrwV.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/66yp55KLKpEqNVS44m1ZnLmJqnN.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 2000
      },
      {
        "aspect_ratio": 0.707,
        "height": 2048,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/s2QfVSA6AcIbmZJV43m3aPJOb4G.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1447
      },
      {
        "aspect_ratio": 0.667,
        "height": 750,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/1zykDKZqRWsfadec0OqErGFfn1J.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 500
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/zGzxeFdVyYRcl9KmuIsVsdVmOTw.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 2000
      },
      {
        "aspect_ratio": 0.681,
        "height": 1585,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/vE0YnxFhWO1Ik52JYln2TXyOmx9.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1080
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/fLJU4br15Uy2XtFwKPjuMPRYiks.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 2000
      },
      {
        "aspect_ratio": 0.675,
        "height": 2048,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/fmCMkOCVvtSLOKIQx4FHvqtmEJJ.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1382
      },
      {
        "aspect_ratio": 0.675,
        "height": 2048,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/zbccgwp2ygmRudvI5ZEyiwCNFIY.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1382
      },
      {
        "aspect_ratio": 0.675,
        "height": 2048,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/9qQVV8sUBz7ZEqgCkY0TVupCdZb.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1382
      },
      {
        "aspect_ratio": 0.675,
        "height": 2048,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/7ksefvUk1BTVtzAkmkNskKaLxpn.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1382
      },
      {
        "aspect_ratio": 0.667,
        "height": 3000,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/marsxpQp1GRUpRYbdpY75KmcZXe.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 1500,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/sYyeljOfhdO3V70JebuOtJ2G53s.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1000
      },
      {
        "aspect_ratio": 0.667,
        "height": 1600,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/df46n6KDMlRJIZTsDFFiWRaT2vp.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1067
      },
      {
        "aspect_ratio": 0.666,
        "height": 2500,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/leA93j3jTdM23MyQpNsE3mwtoGF.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1666
      },
      {
        "aspect_ratio": 0.672,
        "height": 1096,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/uKFNl206MgMwGVI75yoCtahDP8b.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 736
      },
      {
        "aspect_ratio": 0.667,
        "height": 1500,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/sXTPt4Pju6vq4c0DT0xk1J4KZp2.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1000
      },
      {
        "aspect_ratio": 0.679,
        "height": 1002,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/zb8NwOy0i57kRHjtC8to5wuer3s.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 680
      },
      {
        "aspect_ratio": 0.679,
        "height": 1002,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/d6ajr4KwW7O6xnIFl7l375xnlHR.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 680
      },
      {
        "aspect_ratio": 0.679,
        "height": 1002,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/1UPFY1Q40Io5EOcV5iOeqedJW9L.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 680
      },
      {
        "aspect_ratio": 0.667,
        "height": 1920,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/vNsBZCPaZ6N9XHon5HK1q6cNsuA.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1280
      },
      {
        "aspect_ratio": 0.667,
        "height": 750,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/bXdykhtw4nA6Zw2RRnMqn5Imvzg.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 500
      },
      {
        "aspect_ratio": 0.667,
        "height": 810,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/vXvrryB4Hz2Qj5EPLfVhC0mLMci.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 540
      },
      {
        "aspect_ratio": 0.667,
        "height": 1800,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/1z2FlNLGfJXJXVHloTn87rYZck3.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1200
      },
      {
        "aspect_ratio": 0.675,
        "height": 2962,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/ylDILZtnmXzdgW7u5vW7bUxwqzf.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 2000
      },
      {
        "aspect_ratio": 0.667,
        "height": 1752,
        "iso_639_1": "en",
        "file_path": "https://image.tmdb.org/t/p/original/ww5q4a9rDGyRzEK3W6bTsNkC1Uw.jpg",
        "vote_average": 0,
        "vote_count": 0,
        "width": 1168
      }
    ]
  }
  return (
    <MoviePage movies={movies} images={images} rank={1} isTopRated={true} />
  );
}
