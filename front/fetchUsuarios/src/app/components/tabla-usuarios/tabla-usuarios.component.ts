import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  listUsuarios: any[] = [    
  ]
  constructor(private _usuarioService:UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.getListUsuarios().subscribe( data =>{
      console.log(data);
      this.listUsuarios = data;
    }, error =>{
      console.log(error);
    })  
  }
    

}
