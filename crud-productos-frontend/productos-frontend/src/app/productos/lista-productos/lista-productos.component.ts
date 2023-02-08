import { ProductoService } from './../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  listaProductos: Producto[] = [];

  constructor(private productoService: ProductoService){



  }
  ngOnInit():void {
   this.cargarProductos();
  }
  borrarProducto(id:number): void{
    this.productoService.borrarUnProducto(id).subscribe(response => {
      console.log("Eliminado con Exito");
      this.cargarProductos();
    })
  }
  cargarProductos():void{
    this.productoService.getProductos().subscribe(response => {
      this.listaProductos =  response;
    });
  }

}
