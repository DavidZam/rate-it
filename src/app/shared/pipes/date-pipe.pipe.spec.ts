import { DateFormatPipe } from './date-pipe.pipe';

describe('DatePipePipe', () => {
  it('create an instance', () => {
    const pipe = new DateFormatPipe('2024-06-20');
    expect(pipe).toBeTruthy();
  });
});
