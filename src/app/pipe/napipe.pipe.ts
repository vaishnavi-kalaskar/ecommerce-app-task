import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'napipe',
  standalone: true
})
export class NapipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
