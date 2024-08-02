import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import type { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private movieBaseUrl: string = 'https://api.themoviedb.org/3/movie';
  private tvSeriesBaseUrl: string = 'https://api.themoviedb.org/3/tv';
  private extraParameters: string = '?include_adult=true&include_video=true&language=es-ES&page=1&sort_by=popularity.desc';

  constructor(private httpClient: HttpClient) {}

  getPopularMovies(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.movieBaseUrl}/popular${this.extraParameters}`).pipe(map((data) => data));
  }

  geUpcomingMovies(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.movieBaseUrl}/upcoming${this.extraParameters}`).pipe(map((data) => data));
  }

  getPopularTvSeries(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.tvSeriesBaseUrl}/popular${this.extraParameters}`).pipe(map((data) => data));
  }

  geTopRatedMovies(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.movieBaseUrl}/top_rated${this.extraParameters}`).pipe(map((data) => data));
  }

  geTopRatedTvSeries(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.tvSeriesBaseUrl}/top_rated${this.extraParameters}`).pipe(map((data) => data));
  }

  getAiringTodayTvSeries(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.tvSeriesBaseUrl}/top_rated${this.extraParameters}`).pipe(map((data) => data));
  }
}
