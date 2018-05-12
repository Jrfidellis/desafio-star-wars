import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FilmeService } from '../../services/filme/filme.service';
import { IFilme } from '../../services/filme/filme';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-opening-crawl',
  templateUrl: './opening-crawl.component.html',
  styleUrls: ['./opening-crawl.component.scss']
})
export class OpeningCrawlComponent implements OnInit {

  constructor(private route: ActivatedRoute, private filmeService: FilmeService) { }

  filme$: Observable<IFilme>;

  ngOnInit() {
    this.initializeStars();
    this.filme$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.filmeService.obterFilmePorId(params.get('id')))
      );
  }

  romanizer(num: number) {
    const lookup = {X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let roman = '', i;

    // tslint:disable-next-line:forin
    for (i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }

  // Baseado em https://dev.to/christopherkade/developing-the-star-wars-opening-crawl-in-htmlcss-2j9e
  private initializeStars() {
    const quantidadeStars = 100;

    const posicaoAleatoria = () => {
      const y = window.innerWidth;
      const x = window.innerHeight;
      const randomX = Math.floor(Math.random() * x);
      const randomY = Math.floor(Math.random() * y);
      return [randomX, randomY];
    };

    for (let i = 0; i < quantidadeStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const xy = posicaoAleatoria();
      star.style.top = xy[0] + 'px';
      star.style.left = xy[1] + 'px';
      star.style.position = 'absolute';
      star.style.width = '1px';
      star.style.height = '1px';
      star.style.backgroundColor = 'white';
      document.getElementsByClassName('app-opening-crawl').item(0).appendChild(star);
    }
  }

}
