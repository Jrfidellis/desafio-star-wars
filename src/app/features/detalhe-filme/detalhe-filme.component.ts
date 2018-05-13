import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SwapiGenericService } from '../../services/swapi-generic/swapi-generic.service';
import { IFilme, IPlaneta, INave, IPersonagem } from '../../services/filme/filme';
import { Observable } from 'rxjs/Observable';
import { FilmeService } from '../../services/filme/filme.service';

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.scss']
})
export class DetalheFilmeComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private genericService: SwapiGenericService,
    private filmeService: FilmeService
  ) { }

  planetas: IPlaneta[] = [];
  naves: INave[]= [];
  personagens: IPersonagem[] = [];

  filme$: Observable<IFilme>;

  ngOnInit() {
    this.filme$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.filmeService.obterFilmePorId(params.get('id')))
      );

    this.filme$.subscribe(filme => {
      this.popularObjetos(filme);
    });
  }

  private popularObjetos(filme: IFilme){
    
    filme.planets.forEach(url => {
      this.genericService.obterDadosComUrlCompleta<IPlaneta>(url).then(planeta => {
        this.planetas.push(planeta);
      });
    });

    filme.starships.forEach(url => {
      this.genericService.obterDadosComUrlCompleta<INave>(url).then(nave => {
        this.naves.push(nave);
      });
    });

    filme.characters.forEach(url => {
      this.genericService.obterDadosComUrlCompleta<IPersonagem>(url).then(personagem => {
        this.personagens.push(personagem);
      })
    });
  }

}
