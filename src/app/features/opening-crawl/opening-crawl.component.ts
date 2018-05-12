import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opening-crawl',
  templateUrl: './opening-crawl.component.html',
  styleUrls: ['./opening-crawl.component.scss']
})
export class OpeningCrawlComponent implements OnInit {

  constructor() { }

  @Input() capitulo: number;
  @Input() texto: string;
  @Input() titulo: string;

  capituloEmRomano: string;

  ngOnInit() {
    this.initializeStars();
    this.capituloEmRomano = this.romanizer(this.capitulo);
  }

  private romanizer(num: number) {
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

  // baseado em https://dev.to/christopherkade/developing-the-star-wars-opening-crawl-in-htmlcss-2j9e
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
      document.body.appendChild(star);
    }
  }

}
