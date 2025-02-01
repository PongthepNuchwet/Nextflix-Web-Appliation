export interface TrendingMediaParams {
  mediaType: 'movie' | 'tv' | 'all';
  frequency: 'day' | 'week';
  lang: string;
}

export interface MediaParams {
  mediaType: 'movie' | 'tv' | 'all';
  id: number;
  lang: string;
}
