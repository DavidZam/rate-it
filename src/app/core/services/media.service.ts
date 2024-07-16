import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Media } from '../models/media.interface';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private movieBaseUrl: string = 'https://api.themoviedb.org/3/movie';
  private tvSeriesBaseUrl: string = 'https://api.themoviedb.org/3/tv';

  constructor(private httpClient: HttpClient) {}

  getPopularMovies() {
    return this.httpClient.get<Media[]>(`${this.movieBaseUrl}/popular`).pipe(
      map((data: any) => {
        return {
          pageTitle: 'Popular Movies',
          media: data.results,
        };
      })
    );
  }

  geUpcomingMovies() {
    return this.httpClient.get<Media[]>(`${this.movieBaseUrl}/upcoming`).pipe(
      map((data: any) => {
        return {
          pageTitle: 'Upcoming Movies',
          media: data.results,
        };
      })
    );
  }

  getPopularTvSeries() {
    return this.httpClient.get<Media[]>(`${this.tvSeriesBaseUrl}/popular`).pipe(
      map((data: any) => {
        return {
          pageTitle: 'Popular TV Series',
          media: data.results,
        };
      })
    );
  }

  geTopRatedMovies() {
    return this.httpClient.get<Media[]>(`${this.movieBaseUrl}/top_rated`).pipe(
      map((data: any) => {
        return {
          pageTitle: 'Top Rated Movies',
          media: data.results,
        };
      })
    );
  }

  geTopRatedTvSeries() {
    return this.httpClient.get<Media[]>(`${this.tvSeriesBaseUrl}/top_rated`).pipe(
      map((data: any) => {
        return {
          pageTitle: 'Top Rated TV Series',
          media: data.results,
        };
      })
    );
  }

  getAiringTodayTvSeries() {
    return this.httpClient.get<Media[]>(`${this.tvSeriesBaseUrl}/airing_today`).pipe(
      map((data: any) => {
        return {
          pageTitle: 'Airing Today TV Series',
          media: data.results,
        };
      })
    );
  }
}
