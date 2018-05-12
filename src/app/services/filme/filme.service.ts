import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFilme, IFilmes } from './filme';

@Injectable()
export class FilmeService {

  private filmesUrl = 'https://swapi.co/api/films/';

  constructor(private http: HttpClient) { }

  obterFilmes(): Promise<IFilmes> {
    const url = `${this.filmesUrl}`;
    return this.http.get<IFilmes>(url).toPromise();
  }

  obterFilmePorId(id: number): Promise<IFilme> {
    const url = `${this.filmesUrl}/${id}`;
    return this.http.get<IFilme>(url).toPromise();
  }

}
