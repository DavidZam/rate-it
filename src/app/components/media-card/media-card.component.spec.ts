import { DatePipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import type { Media } from '@models/media.interface';
import { MediaCardComponent } from './media-card.component';

const media: Media = {
  adult: false,
  backdrop_path: '/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg',
  genre_ids: [16, 10751, 12, 35, 18],
  id: 1,
  origin_country: [],
  original_language: 'en',
  original_title: 'Inside Out 2',
  overview:
    "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
  popularity: 5696.178,
  poster_path: '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
  first_air_date: '',
  release_date: '2024-06-11',
  name: '',
  title: 'Inside Out 2',
  video: false,
  vote_average: 7.696,
  vote_count: 1846,
};

const API_IMG_URL = 'https://image.tmdb.org/t/p/w500';

registerLocaleData(localeEs);

describe('Media Card', () => {
  it('should render the component', async () => {
    await render(MediaCardComponent);
  });

  it('should display media title on render', async () => {
    await render(MediaCardComponent, {
      componentProperties: {
        media,
      },
    });

    expect(screen.getByText(media.title)).toBeInTheDocument();
  });

  it('should display media overview on render', async () => {
    await render(MediaCardComponent, {
      componentProperties: {
        media,
      },
    });

    expect(screen.getByText(media.overview)).toBeInTheDocument();
  });

  it('should display media release date on render', async () => {
    await render(MediaCardComponent, {
      imports: [DatePipe],
      componentProperties: {
        media,
      },
    });

    const pipe = new DatePipe('en');
    const dateWithPipe = pipe.transform(media.release_date, 'dd/MM/yyyy') || '';

    expect(screen.getByRole('heading', { name: `Release date: ${dateWithPipe}` })).toBeInTheDocument();
  });

  it('should display media poster path on render', async () => {
    await render(MediaCardComponent, {
      componentProperties: {
        media,
        API_IMG_URL,
      },
    });

    expect(screen.getByAltText(/Media Card Image/)).toBeInTheDocument();

    const displayedImage = document.querySelector('img') as HTMLImageElement;
    expect(displayedImage.src).toContain(`${media.poster_path}`);
  });
});
