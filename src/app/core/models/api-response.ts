import { Media } from './media.interface';

export type ApiResponse = {
  page: number;
  results: Media[];
  total_pages: number;
  total_results: number;
};
