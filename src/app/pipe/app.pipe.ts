import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'app'
})
export class AppPipe implements PipeTransform {
  constructor() { }
  transform(Value: string, Obj) {
    return !Obj || !Obj[Value] ? Value : Obj[Value];
  }
}
