import { Pipe, PipeTransform } from '@angular/core';
import { Translate } from '../ts/Ts.Lang';

@Pipe({
  name: 'app'
})
export class AppPipe implements PipeTransform {
  constructor() { }
  transform(Value: string, Obj) {
    return !Obj || !Obj[Value] ? Value : Obj[Value];
  }
}

@Pipe({
  name: 'TsLang'
})
export class TsLang implements PipeTransform {
  constructor() { }
  transform(Value: string, type: string) {
    const basis = Translate[type];
    return basis[Value] || Value;
  }
}