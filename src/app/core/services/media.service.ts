import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { ApiResponse } from '@models/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private movieBaseUrl: string = 'https://api.themoviedb.org/3/movie';
  private tvSeriesBaseUrl: string = 'https://api.themoviedb.org/3/tv';
  private extraParameters: string = '?include_adult=true&include_video=true&language=es-ES&page=1&sort_by=popularity.desc';

  constructor(private httpClient: HttpClient) {}

  getPopularMovies(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.movieBaseUrl}/popular${this.extraParameters}`);
  }

  geUpcomingMovies(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.movieBaseUrl}/upcoming${this.extraParameters}`);
  }

  getPopularTvSeries(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.tvSeriesBaseUrl}/popular${this.extraParameters}`);
  }

  geTopRatedMovies(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.movieBaseUrl}/top_rated${this.extraParameters}`);
  }

  geTopRatedTvSeries(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.tvSeriesBaseUrl}/top_rated${this.extraParameters}`);
  }

  getAiringTodayTvSeries(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.tvSeriesBaseUrl}/top_rated${this.extraParameters}`);
  }
}
