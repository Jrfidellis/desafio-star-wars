import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './shell/app.component';

import { ListagemFilmesComponent } from './features/listagem-filmes/listagem-filmes.component';
import { CardFilmeComponent } from './features/listagem-filmes/card-filme/card-filme.component';
import { OpeningCrawlComponent } from './features/opening-crawl/opening-crawl.component';

import { FilmeService } from './services/filme/filme.service';
import { SwapiGenericService } from './services/swapi-generic/swapi-generic.service';

@NgModule({
  declarations: [
    AppComponent,
    ListagemFilmesComponent,
    CardFilmeComponent,
    OpeningCrawlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    FilmeService,
    SwapiGenericService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
