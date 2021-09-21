import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { SharedRoutingModule } from './shared/shared-routing.module';

const routes: Routes = [
  {path:'',component:LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SharedRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
