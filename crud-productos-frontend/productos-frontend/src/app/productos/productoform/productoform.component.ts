import { Categoria } from './../../models/categoria';
import { ProductoService } from './../services/producto.service';
import { Producto } from 'src/app/models/producto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productoform',
  templateUrl: './productoform.component.html',
  styleUrls: ['./productoform.component.css']
})
export class ProductoformComponent {

  title:string = "";
  producto:Producto = new Producto();
  categorias: Categoria[] = [];
  constructor(private productoService:ProductoService, private activatedRoute: ActivatedRoute, private router:Router){

  }

  ngOnInit(): void {
    this.productoService.getCategorias()
        .subscribe(response => {
          this.categorias =  response;
        })

    this.activatedRoute
        .params
          .subscribe(params => {
            let id: number = params['id'];

            if (id){
              this.productoService.getProductoById(id).subscribe(response => {
                this.producto = response;
              });
              this.title = "Editar un Producto";
            } else{
              this.title = "Crear un Producto";
            }
    });

  }

  crearProducto(): void{
    console.log(this.producto);
    this.productoService.crearProducto( this.producto )
        .subscribe(response => {
          console.log("Creacion de Producto Exitosa");
          this.router.navigate(['']);

        });
  }

  actualizarProducto():void{
    this.productoService.actualizarProducto(this.producto)
        .subscribe( response => {
          console.log("Actualizacion exitosa");
          this.router.navigate(['']);
        })
  }

  

}
