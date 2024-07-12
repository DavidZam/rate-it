import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private movieBaseUrl: string = 'https://api.themoviedb.org/3/movie';
  private tvSeriesBaseUrl: string = 'https://api.themoviedb.org/3/tv';

  constructor(private httpClient: HttpClient) {}

  getNowPlayingMovies() {
    return this.httpClient.get<Movie[]>(`${this.movieBaseUrl}/now-playing`);
  }

  getTopRatedMovies() {
    return this.httpClient.get<Movie[]>(`${this.movieBaseUrl}/top-rated`);
  }

  getPopularMovies() {
    return this.httpClient.get<Movie[]>(`${this.movieBaseUrl}/popular`);
  }

  geUpcomingMovies() {
    return this.httpClient.get<Movie[]>(`${this.movieBaseUrl}/upcoming`);
  }

  getNowPlayingTvSeries() {
    return this.httpClient.get<Movie[]>(`${this.tvSeriesBaseUrl}/now-playing`);
  }
}
