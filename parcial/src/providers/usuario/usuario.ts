import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../modelo/usuario.modelo';
import { URL } from '../../config/variables.config';

@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient) {
  }

  crear_usuario(usuario : Usuario) : Observable<any>{
    return this.http.post(`${URL}/usuario`, usuario);
  }

  modificar_usuario(usuario : Usuario, id) : Observable<any>{
    return this.http.put(`${URL}/usuario/${id}`, usuario);
  }

  eliminar_usuario(id) : Observable<any>{
    return this.http.delete(`${URL}/usuario/${id}`);
  }

  listarUsuarios() : Observable<Array<Usuario>>{
    return this.http.get<Array<Usuario>>(`${URL}/listar`);
  }

  loguear(usuario : Usuario) : Observable<Array<Usuario>>{
    console.log(usuario);
    return this.http.post<Array<Usuario>>(`${URL}/loguear/`, usuario);
  }

}