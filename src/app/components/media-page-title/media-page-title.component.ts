import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-page-title',
  standalone: true,
  imports: [],
  templateUrl: './media-page-title.component.html',
  styleUrl: './media-page-title.component.css'
})
export class MediaPageTitleComponent {
  @Input({ required: true}) title = '';
}
