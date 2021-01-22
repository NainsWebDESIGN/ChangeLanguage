import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '@service/Language.service';
import { TRANSLATE_PIPE } from '../ts/Ts.Lang';

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
  constructor(private Config: LanguageService) { }
  transform(Value: string, type: string) {
    const lang = this.Config.Language;
    const basis = TRANSLATE_PIPE[type][lang];
    return basis[Value] || Value;
  }
}