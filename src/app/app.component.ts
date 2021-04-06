import { LanguageService } from '@service/Language.service';
import { Component, OnInit } from '@angular/core';
import { Translate } from './ts/Ts.Lang';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LanguageService]
})
export class AppComponent implements OnInit {
  Language = {};
  constructor(public lang: LanguageService) { }
  changeLang(_Lang: string) {
    this.lang.getLang(_Lang);
  }
  AlertSome() {
    alert(Translate[this.lang.Language]['AlertSome']);
  }
  ngOnInit() {
  }
}
