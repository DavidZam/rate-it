import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';
import { Movie } from '../../models/movie';

export default Factory.define<Movie>(({ sequence }) => ({
  id: sequence,
  title: faker.lorem.paragraph(),
  overview: faker.lorem.paragraph(),
  poster_path: 'a.jpg',
  release_date: faker.date.recent().toISOString(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
}));
