import { Component, inject, Input } from '@angular/core';
import { Media } from '../../models/media';
import { MediaService } from '../../services/media.service';
import { MediaCardComponent } from '../media-card/media-card.component';
import { MediaPageTitleComponent } from '../media-page-title/media-page-title.component';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [MediaCardComponent, MediaPageTitleComponent],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css',
})
export class MediaComponent {
  moviesService = inject(MediaService);

  @Input() pageTitle = '';
  @Input() mediaContent: Media[] = [];
}
