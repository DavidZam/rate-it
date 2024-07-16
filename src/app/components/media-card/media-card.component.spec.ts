import { DatePipe } from '@angular/common';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { Media } from '../../core/models/media.interface';
import { MediaCardComponent } from './media-card.component';

const media: Media = {
  id: 1,
  title: 'Awesome media',
  overview: 'The most awesome media of history',
  poster_path: '/zszRKfzjM5jltiq8rk6rasKVpUv.jpg',
  release_date: '2024-06-20',
};

const API_IMG_URL = 'https://image.tmdb.org/t/p/w500';

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

    let pipe = new DatePipe('en');
    let dateWithPipe = pipe.transform(media.release_date, 'dd/MM/yyyy') || '';

    expect(
      screen.getByRole('heading', { name: `Release date: ${dateWithPipe}` })
    ).toBeInTheDocument();
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
