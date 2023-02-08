import { FormsModule } from '@angular/forms';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductoformComponent } from './productoform/productoform.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListaProductosComponent,
    ProductoformComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule, FormsModule
  ], exports: [
    ListaProductosComponent
  ]
})
export class ProductosModule { }
