import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AulaService } from '@services/aula.mock.service';
import { CustomMatPaginatorService } from '@utils/custom-mat-paginator.service';

@Component({
  selector: 'app-mis-aulas',
  templateUrl: './mis-aulas.component.html',
  styleUrls: ['./mis-aulas.component.scss']
})
export class MisAulasComponent implements OnInit {
  isOpen = false;
  aulas :any = [];
  aulasplice:any = [];
  startindex = 0;
  endindex = 6;
  @ViewChild(MatPaginator) aulaspaginator: MatPaginator;
  private noOfItemsToShowInitially: number = 6;
  private itemsToLoad: number = 6;
  public isFullListDisplayed: boolean = false;

  constructor(private serviceaulas : AulaService,
    private custompaginator:CustomMatPaginatorService,private route:Router) { }

  ngOnInit(): void {

    this.serviceaulas.getaula().subscribe(aulas =>{
      this.aulas = aulas;
      this.aulasplice = this.aulas.slice(this.startindex,this.noOfItemsToShowInitially);
       console.log('aulas mock',aulas);
    });

  }

  onScroll() {
    if (this.noOfItemsToShowInitially <= this.aulas.length) {
        // Update ending position to select more items from the array
        this.noOfItemsToShowInitially += this.itemsToLoad;
        this.aulasplice = this.aulas.slice(0, this.noOfItemsToShowInitially);
    } else {
        this.isFullListDisplayed = true;
    }
}

  ngAfterViewInit(): void {
    // if(this.aulas.length > 0){
    //   this.aulaspaginator._intl.nextPageLabel = 'Siguiente página';
    //   this.aulaspaginator._intl.previousPageLabel = 'Anterior página';
    //   this.aulaspaginator._intl.itemsPerPageLabel = "Items por página"
    //   this.aulaspaginator._intl.getRangeLabel = this.custompaginator.getRangeLabel;
    // }
  
  }


  onchangePages(event: PageEvent) {
    this.startindex = event.pageIndex * event.pageSize;
    this.endindex = this.startindex + event.pageSize;
 
      if (this.endindex > this.aulas.length) {
        this.endindex = this.aulas.length;
      }
      this.aulasplice = this.aulas.slice(this.startindex, this.endindex);
    }


    openDialog () {
      this.isOpen = true;
      // alert(this.isOpen)
    }
    delete(index :number){
      this.aulasplice.splice(index,1);
    }


  
    // handleCancel() {
    //   this.isOpen = false;
    // }
    handleClose( arg: any) {
      this.isOpen = arg
      console.log("arg", arg)
    }
  
    handleSave( data: any) {
      console.log("33333333333", data)
      this.aulas.push(data)
    }

    edit(id:number){
      this.route.navigate(['/edit',id]);
    }
}
