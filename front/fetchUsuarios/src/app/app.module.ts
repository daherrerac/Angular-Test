import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';

import {HttpClientModule} from '@angular/common/http';
import { DetailUsuarioComponent } from './components/detail-usuario/detail-usuario.component'

@NgModule({
  declarations: [
    AppComponent,
    TablaUsuariosComponent,
    DetailUsuarioComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
