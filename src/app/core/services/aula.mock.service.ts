import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { aula } from '@models/aula.model';
import { Iaulaservice } from './aula.service.interface';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AulaService implements Iaulaservice {

  aulas: aula[] = [];

  constructor(private http : HttpClient) { 
  }

 
  getaula():Observable<aula>{
    return this.http.get<aula>('./assets/static/aulas.json');
  }

 

  getaulas(): Observable<aula[]> {
    return of(this.aulas);
  }

  addaula(aula:aula){
    this.aulas.push(aula);
  }

}
