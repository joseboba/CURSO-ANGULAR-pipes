import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
      return (activar) ? '*'.repeat(value.length) : value
  }

}
