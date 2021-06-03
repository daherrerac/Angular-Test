import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUsuarioComponent } from './components/detail-usuario/detail-usuario.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';


const routes: Routes = [
    { path: '', component: TablaUsuariosComponent},
    { path: 'usuario/:id', component: DetailUsuarioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }