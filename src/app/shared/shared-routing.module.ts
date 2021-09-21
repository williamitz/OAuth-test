import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from '../pages/calendario/calendario.component';
import { ChatComponent } from '../pages/chat/chat.component';
import { EditAulaComponent } from '../pages/edit-aula/edit-aula.component';
import { MisAulasComponent } from '../pages/mis-aulas/mis-aulas.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'aula',component:MisAulasComponent},
    {path:'calendario',component:CalendarioComponent},
    {path:'chat',component:ChatComponent},
    {path:'edit/:id',component:EditAulaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
