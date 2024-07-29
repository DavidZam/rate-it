import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | undefined): string | null {
    return new DatePipe('es').transform(value, 'dd/MM/yyyy');
  }
}
