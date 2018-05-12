import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './shell/app.component';

import { ListagemFilmesComponent } from './features/listagem-filmes/listagem-filmes.component';
import { CardFilmeComponent } from './features/listagem-filmes/card-filme/card-filme.component';

import { FilmeService } from './services/filme/filme.service';

@NgModule({
  declarations: [
    AppComponent,
    ListagemFilmesComponent,
    CardFilmeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    FilmeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
