import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-usuario',
  templateUrl: './detail-usuario.component.html',
  styleUrls: ['./detail-usuario.component.css']
})
export class DetailUsuarioComponent implements OnInit {
  [x: string]: any;
  detalleUsuario : any[] =[];
  item = false;
  constructor(private _detalleService:UsuariosService,private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.iduser = this.rutaActiva.snapshot.params.id; 
    console.log(this.iduser); 
    this.obtenerdetalleUsuarios(this.iduser);
    console.log(this.detalleUsuario);
        
  }
  
  obtenerdetalleUsuarios(iduser: string){
    this._detalleService.getdetalleUsuarios(iduser).subscribe( data =>{
      console.log(Object.values(data));
      this.detalleUsuario = Object.values(data);
    }, error =>{
      console.log(error);
    })  
  }
    
  setEdit(item: any) {
    item = true;
  }

}
