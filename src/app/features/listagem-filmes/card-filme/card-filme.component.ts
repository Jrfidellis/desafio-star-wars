import { Component, Input } from '@angular/core';
import { IFilme } from '../../../services/filme/filme';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.scss']
})
export class CardFilmeComponent {

  constructor() { }

  @Input() filme: IFilme;

}
