import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// features
import { ListagemFilmesComponent } from './features/listagem-filmes/listagem-filmes.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-filmes', pathMatch: 'full' },
  { path: 'lista-filmes', component: ListagemFilmesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
