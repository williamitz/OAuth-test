import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MisAulasComponent } from './pages/mis-aulas/mis-aulas.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CrearAulaComponent } from './pages/crear-aula/crear-aula.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { environment } from 'src/environments/environment';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { EditAulaComponent } from './pages/edit-aula/edit-aula.component';


@NgModule({
  declarations: [
    AppComponent,
    MisAulasComponent,
    CalendarioComponent,
    ChatComponent,
    CrearAulaComponent,
    EditAulaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    ...environment.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
