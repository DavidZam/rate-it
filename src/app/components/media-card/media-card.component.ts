import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css'
})
export class MediaCardComponent {
  API_IMG_URL = 'https://image.tmdb.org/t/p/w500';
  @Input({ required: true }) movie: Movie | undefined;
}
