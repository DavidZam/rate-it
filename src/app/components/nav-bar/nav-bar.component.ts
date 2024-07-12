import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarLinkComponent } from '../nav-bar-link/nav-bar-link.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NavBarLinkComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  navBarItems: Map<string, string> = new Map([
    ['home', 'Home'],
    ['popular-movies', 'Popular Movies'],
    ['upcoming-movies', 'Upcoming Movies'],
  ]);

  navBarItemsArray: { link: string; label: string }[] = [];

  ngOnInit() {
    this.navBarItemsArray = Array.from(this.navBarItems, ([link, label]) => ({
      link,
      label,
    }));
  }
}
