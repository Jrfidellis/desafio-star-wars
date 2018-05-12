import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SwapiGenericService {

  constructor(private http: HttpClient) { }

  obterDadosComUrlCompleta<T>(url: string): Promise<T> {
    return this.http.get<T>(url).toPromise();
  }

}
