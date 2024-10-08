export interface Media {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country?: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date?: string;
  release_date: string;
  name?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
