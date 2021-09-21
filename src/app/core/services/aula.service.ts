import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { aula } from '@models/aula.model';
import { Iaulaservice } from './aula.service.interface';

@Injectable({
  providedIn: 'root'
})
export class AulaService implements Iaulaservice{

  constructor(private http : HttpClient) { }


   getaulas(){
     return this.http.get('./assets/static/aulas.json') as Observable<aula[]>;
   }
   
}
