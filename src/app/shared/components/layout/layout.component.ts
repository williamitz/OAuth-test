import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  isOpened :boolean = true;
  desktopViewWidth: number = 425;
  showFiller = false;
  hasBackdrop = false;
  draweroptions = [
    {"nombre":'Mis Aulas',"icon":'home',"ruta":'/aula'},
    {"nombre":'Calendario',"icon":'today',"ruta":'/calendario'},
    {"nombre":'Chat',"icon":'textsms',"ruta":'/chat'}
  ]
  constructor() { }

  ngOnInit(): void {
    this.onResize(window.innerWidth);
  }

  active(){
   this.isOpened = !this.isOpened;
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    if(width <= 425){
      if(this.isOpened === true){
      //this.isOpened = width >= this.desktopViewWidth;
      this.isOpened = false;
     }
  
   }
   
  }

}
