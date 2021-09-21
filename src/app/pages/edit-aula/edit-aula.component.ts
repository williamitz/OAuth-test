import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaService } from '@services/aula.mock.service';
import { aula } from '@models/aula.model';

@Component({
  selector: 'app-edit-aula',
  templateUrl: './edit-aula.component.html',
  styleUrls: ['./edit-aula.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class EditAulaComponent implements OnInit {

 
  idaula:any;
  aula:any= [];

  constructor(private route: Router,private router: ActivatedRoute,private serviceaula:AulaService) { }

  ngOnInit(): void {
      this.idaula= this.router.snapshot.paramMap.get('id');
      console.log('id aula',this.idaula);
      this.getAula();
  }

  returnaulas(){
    this.route.navigateByUrl("/aula");
  }

  getAula(){
    let _aulas:any[] = [];
    this.serviceaula.getaula().subscribe(aulas =>{
      _aulas = aulas as any;
      const result = _aulas.find(x => x.id == this.idaula);
      this.aula = [result];
       console.log('aula',[result]);
    });
  }

}
