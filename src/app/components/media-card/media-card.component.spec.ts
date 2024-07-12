import { DatePipe } from '@angular/common';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { Movie } from '../../models/movie';
import { MediaCardComponent } from './media-card.component';

const movie: Movie = {
  id: 1,
  title: 'Awesome movie',
  overview: 'The most awesome movie of history',
  poster_path: '/zszRKfzjM5jltiq8rk6rasKVpUv.jpg',
  release_date: '2024-06-20',
};

const API_IMG_URL = 'https://image.tmdb.org/t/p/w500';

describe('Media Card', () => {
  it('should render the component', async () => {
    await render(MediaCardComponent);
  });

  it('should display movie title on render', async () => {
    await render(MediaCardComponent, {
      componentProperties: {
        movie,
      },
    });

    expect(screen.getByText(movie.title)).toBeInTheDocument();
  });

  it('should display movie overview on render', async () => {
    await render(MediaCardComponent, {
      componentProperties: {
        movie,
      },
    });

    expect(screen.getByText(movie.overview)).toBeInTheDocument();
  });

  it('should display movie release date on render', async () => {
    await render(MediaCardComponent, {
      imports: [DatePipe],
      componentProperties: {
        movie,
      },
    });

    let pipe = new DatePipe('en');
    let dateWithPipe = pipe.transform(movie.release_date, 'dd/MM/yyyy') || '';

    expect(
      screen.getByRole('heading', { name: `Release date: ${dateWithPipe}` })
    ).toBeInTheDocument();
  });

  it('should display movie poster path on render', async () => {
    await render(MediaCardComponent, {
      componentProperties: {
        movie,
        API_IMG_URL,
      },
    });

    expect(screen.getByAltText(/Media Card Image/)).toBeInTheDocument();

    const displayedImage = document.querySelector('img') as HTMLImageElement;
    expect(displayedImage.src).toContain(`${movie.poster_path}`);
  });
});
