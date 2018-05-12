import { Component, Input, OnInit } from '@angular/core';
import { FilmeService } from '../../services/filme/filme.service';
import { IFilme } from '../../services/filme/filme';

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.template.html',
  styleUrls: ['./listagem-filmes.scss']
})
export class ListagemFilmesComponent implements OnInit {

  filmes: IFilme[];
  filmeIndex = 0;
  reiniciarLista = false;

  constructor(private service: FilmeService) { }

  ngOnInit() {
    this.service.obterFilmes().then(response => this.filmes = response.results);
    this.mudarFilmesComSetasKeyboard();
  }

  organizarLista(isInverso: boolean) {
    if (isInverso) {
      this.filmes.unshift(this.filmes.pop());
    } else {
      this.filmes.push(this.filmes.shift());
    }
  }

  private mudarFilmesComSetasKeyboard() {
    document.onkeydown = (e) => {
      const windowEvent = window.event as KeyboardEvent;
      const event = windowEvent ? windowEvent : e;

      // Seta para esquerda ←
      if (event.keyCode === 37) {
        this.organizarLista(true);

      // Seta para direita →
      } else if (event.keyCode === 39) {
        this.organizarLista(false);
      }
    };
  }

}
