import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Media } from '../models/media';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private movieBaseUrl: string = 'https://api.themoviedb.org/3/movie';
  private tvSeriesBaseUrl: string = 'https://api.themoviedb.org/3/tv';

  constructor(private httpClient: HttpClient) {}

  getNowPlayingMovies() {
    return this.httpClient.get<Media[]>(`${this.movieBaseUrl}/now-playing`);
  }

  getTopRatedMovies() {
    return this.httpClient.get<Media[]>(`${this.movieBaseUrl}/top-rated`);
  }

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

  getNowPlayingTvSeries() {
    return this.httpClient.get<Media[]>(`${this.tvSeriesBaseUrl}/now-playing`);
  }
}
