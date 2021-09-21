import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  private _modalidad: string[] = ['modalidad'];
  private _niveles: string[] = ['Inicial', 'Primaria', 'Secundaria'];
  private _gradoInicial: string[] = ['tres', 'cuatro', 'cinco', 'cuarto', 'quinto'];
  private _gradoPrimaria: string[] = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto'];
  private _gradoSecundaria: string[] = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto'];

  // niveles: string[] = [];
  // flag=false;

  get modalidad(): string[] {
    return [ ...this._modalidad ];
  }

  get niveles(): string[] {
    return [ ...this._niveles ];
  }

  get gradoInicial(): string[] {
    return [ ...this._gradoInicial ];
  }

  get gradoPrimaria(): string[] {
    return [ ...this._gradoPrimaria ];
  }

  get gradoSecundaria(): string[] {
    return [ ...this._gradoSecundaria ];
  }

  constructor() { 
  console.log("222222", this.niveles)
  }

  getNivelesPorModalidad (modalidad: string) {

    if(modalidad === "") {
      return
    } else if ( modalidad === "modalidad") {
      return ["inicial", "primaria", "secundaria"]
    } else if ( modalidad === "modalidad_02") {
      return ["primaria"]
    } else if ( modalidad === "modalidad_03") {
      return ["secundaria"]
    }
    return null
  }

  // getGradoPorNivel (nivel:string) {
  //   if(nivel === "") {
  //     return
  //   } else if ( nivel === "inicial") {
  //     return ["3 años"]
  //   } else if ( nivel === "primaria") {
  //     return ["sexto_primaria"]
  //   } else if ( nivel === "secundaria") {
  //     return ["quinto_secundaria"]
  //   }
  //   return null

  // }
}
