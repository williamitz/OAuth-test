import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AulasService } from '../../service/aulas.service';

import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-crear-aula',
  templateUrl: './crear-aula.component.html',
  styleUrls: ['./crear-aula.component.scss']
})
export class CrearAulaComponent implements OnInit {
  // @Input() isOpen : any;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  @Output() onDataForm: EventEmitter<any> = new EventEmitter();
  // @ViewChild('btnClose') btnClose:any;
  // flag = false;


  dataSchool: FormGroup = this.fb.group({
    institucion: [ , [ Validators.required]   ],
    modalidad: [ , [ Validators.required] ],
    nivel: [ , [ Validators.required] ],
  })

  dataClassroom: FormGroup = this.fb.group({
    titulo: [ , [ Validators.required]   ],
    seccion: [ , [ Validators.required] ],
    description: [ , [ Validators.required] ],
    id: [10]
    // description: [ this.selectedItems , [ Validators.required] ],
  })

  isOpenForm = true;
  isOpenForm2 = false;
  modalidades :any;
  niveles: any;
  grados: any;

  constructor( private fb: FormBuilder, 
                private aulasService: AulasService) { }


  ngOnInit(): void {

    this.modalidades = this.aulasService.modalidad;
    this.niveles = this.aulasService.niveles;
    // this.niveles = this.aulasService.niveles;
    // this.dataSchool.get("modalidad")?.valueChanges
    //   .pipe(
    //     tap( () => {this.dataSchool.get("nivel")?.reset("")}),
    //     switchMap( codigo => this.aulasService.getNivelesPorModalidad( codigo )! ),
    //   )
    //   .subscribe( nivel => {
    //     this.niveles = nivel;
    //     console.log("nivel", nivel)
    //     // this.niveles.push(nivel)
    //   })
      // console.log("this.modalidad!!!!", this.niveles)

    
    this.grados = this.aulasService.gradoPrimaria;

  }

  validateSchool( campo: string ) {
    return this.dataSchool.controls[campo].errors 
            && this.dataSchool.controls[campo].touched;
  }

  validateClassroom( campo: string ) {
    return this.dataClassroom.controls[campo].errors 
            && this.dataClassroom.controls[campo].touched;
  }

  handleCancel() {
    this.onClose.emit( false )
    this.isOpenForm = true;
    this.isOpenForm2 = false;
    this.dataSchool.reset();
  }
  
  handleContinue () {
    if ( this.dataSchool.valid )  {
      this.isOpenForm = false;
      this.isOpenForm2 = true;
      // this.flag = false;
    }
    // this.flag = true;
    this.dataSchool.markAllAsTouched();
  }

  handleBehind () {
    this.isOpenForm = true;
    this.isOpenForm2 = false;
  }

  guardar () {
    delete this.dataClassroom.value.seccion
    console.log(this.dataClassroom.value);
    // this.isOpenForm2 = false;
    
    if ( this.dataClassroom.valid )  {
      this.onDataForm.emit( this.dataClassroom.value )
      // this.flag = false;
      this.dataSchool.reset();
      this.dataClassroom.reset();
      this.handleCancel()
    } 

    // this.flag = true;
    this.dataClassroom.markAllAsTouched();
  }

}
