import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SwapiGenericService } from '../../services/swapi-generic/swapi-generic.service';
import { IFilme } from '../../services/filme/filme';
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

  planetas: any[];
  especies: any[];
  naves: any[];

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.filmeService.obterFilmePorId(params.get('id')).then(filme => {
          this.popularObjetos(filme);
        }))
      );
  }

  private popularObjetos(filme: IFilme){
    filme.planets.forEach(url => {
      this.genericService.obterDadosComUrlCompleta(url).then(planeta => {
        this.planetas.push(planeta);
      });
    });

    filme.species.forEach(url => {
      this.genericService.obterDadosComUrlCompleta(url).then(especie => {
        this.especies.push(especie);
      });
    });

    filme.starships.forEach(url => {
      this.genericService.obterDadosComUrlCompleta(url).then(nave => {
        this.naves.push(nave);
      });
    });
  }

}
