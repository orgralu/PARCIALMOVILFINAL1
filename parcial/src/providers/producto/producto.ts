import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../../modelo/producto.modelo';
import { Categoria } from '../../modelo/categoria.modelo';
import { URL } from '../../config/variables.config';

@Injectable()
export class ProductoProvider {

  constructor(public http: HttpClient) {
  }

  listar_producto(id) : Observable<Array<Producto>>{
    return this.http.get<Array<Producto>>(`${URL}/producto/${id}`);
  }
  
  listacep(id) : Observable<Array<Producto>>{
    return this.http.get<Array<Producto>>(`${URL}/listacep/${id}`);
  }

  listar_producto_pendiente() : Observable<Array<Producto>>{
    return this.http.get<Array<Producto>>(`${URL}/pendiente`);
  }

  listar_categoria() : Observable<Array<Categoria>>{
    return this.http.get<Array<Categoria>>(`${URL}/categoria/`);
  }

  crear_producto(producto : Producto) : Observable<any>{
    return this.http.post(`${URL}/producto`, producto);
  }

  modificar_producto(producto : Producto, id) : Observable<any>{
    return this.http.put(`${URL}/producto/${id}`, producto);
  }

  eliminar_producto(id) : Observable<any>{
    return this.http.delete(`${URL}/producto/${id}`);
  }

}