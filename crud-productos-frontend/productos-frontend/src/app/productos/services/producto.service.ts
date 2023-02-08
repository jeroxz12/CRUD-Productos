import { Producto } from './../../models/producto';
import { ProductosModule } from './../productos.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl: string = "http://localhost:8080/api/productos";

  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable<Producto[]>{

    return this.httpClient.get<Producto[]>(this.baseUrl + '/listar');

  }

  getProductoById(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(this.baseUrl + '/' + id);
  }

  getCategorias(): Observable<Categoria[]>{

    return this.httpClient.get<Categoria[]>(this.baseUrl + '/categorias' );
    
  }


  crearProducto(producto: Producto):Observable<Producto>{
    return this.httpClient.post<Producto>(this.baseUrl + '/crear', producto);
  }

  actualizarProducto(producto: Producto):Observable<Producto>{
    return this.httpClient.put<Producto>(this.baseUrl + '/actualizar/' + producto.id, producto);
  }


  borrarUnProducto(id: number):Observable<Producto>{
    return this.httpClient.delete<Producto>( this.baseUrl + '/borrar/' + id);
  }

}
