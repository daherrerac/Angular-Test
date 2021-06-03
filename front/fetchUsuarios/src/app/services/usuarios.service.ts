import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private myAppUrl = 'https://localhost:44355/';
  private myApiUrl = 'api/Usuarios/';

  constructor(private http: HttpClient) { }

  getListUsuarios():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl);
  }
  getdetalleUsuarios(id:string):Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+id);
  }


}
