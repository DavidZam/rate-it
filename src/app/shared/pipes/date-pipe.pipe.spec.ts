import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { TestBed } from '@angular/core/testing';
import { DateFormatPipe } from './date-pipe.pipe';

// Register the locale data
registerLocaleData(localeEs);

describe('DateFormatPipe', () => {
  let pipe: DateFormatPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [DatePipe],
    });
    pipe = new DateFormatPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format a date object correctly', () => {
    const date = new Date(2023, 6, 29); // Month is 0-based, so 6 represents July
    expect(pipe.transform(date.toString())).toBe('29/07/2023');
  });

  it('should format a date string correctly', () => {
    const dateString = '2023-07-29';
    expect(pipe.transform(dateString)).toBe('29/07/2023');
  });

  it('should return null for an invalid date string', () => {
    const invalidDateString = 'invalid-date';
    try {
      expect(pipe.transform(invalidDateString)).toBeNull();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('should return null for undefined input', () => {
    expect(pipe.transform(undefined)).toBeNull();
  });

  it('should return null for undefined input', () => {
    expect(pipe.transform(undefined)).toBeNull();
  });
});
