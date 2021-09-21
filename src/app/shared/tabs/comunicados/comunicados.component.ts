import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ComunicadosComponent implements OnInit {

  selectedValue: string ='date-2';

  meses: any[] = [
    {value: 'date-0', viewValue: 'Marzo'},
    {value: 'date-1', viewValue: 'Abril'},
    {value: 'date-2', viewValue: 'Mayo'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
