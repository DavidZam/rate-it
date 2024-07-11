import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar-item.component.html',
  styleUrl: './nav-bar-item.component.css',
})
export class NavBarItemComponent {
  @Input({ required: true }) itemLink = '';
}
