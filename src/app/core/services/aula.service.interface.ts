import { aula } from "@models/aula.model";
import { Observable } from "rxjs";

export interface Iaulaservice{
    getaulas():Observable<aula[]>;
}