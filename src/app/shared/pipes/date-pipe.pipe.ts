import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  override transform(value: any): any {
    return super.transform(value, 'dd/MM/yyyy');
  }
}
