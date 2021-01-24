import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// pipe
import { AppPipe, TsLang } from './pipe/app.pipe';

// service
import { LanguageService } from '@service/Language.service';

//Component
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AppPipe,
    TsLang
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
