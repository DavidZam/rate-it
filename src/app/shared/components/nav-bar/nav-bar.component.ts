import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarLinkComponent } from '../nav-bar-link/nav-bar-link.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NavBarLinkComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  navBarItems: Map<string, string> = new Map([
    ['home', 'Home'],
    ['movies/popular', 'Popular Movies'],
    ['movies/top-rated', 'Top Rated Movies'],
    ['movies/upcoming', 'Upcoming Movies'],
    ['tv/popular', 'Popular TV Series'],
    ['tv/top-rated', 'Top Rated TV Series'],
    ['tv/airing-today', 'Airing Today TV Series'],
  ]);

  navBarItemsArray: { link: string; label: string }[] = [];

  ngOnInit() {
    this.navBarItemsArray = Array.from(this.navBarItems, ([link, label]) => ({
      link,
      label,
    }));
  }
}
