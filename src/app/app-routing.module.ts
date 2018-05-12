import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// features
import { ListagemFilmesComponent } from './features/listagem-filmes/listagem-filmes.component';
import { OpeningCrawlComponent } from './features/opening-crawl/opening-crawl.component';

const routes: Routes = [
  { path: '', redirectTo: 'film-listing', pathMatch: 'full' },
  { path: 'film-listing', component: ListagemFilmesComponent },
  { path: 'opening-crawl', component: OpeningCrawlComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
