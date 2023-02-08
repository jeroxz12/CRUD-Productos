import { ProductoformComponent } from './productos/productoform/productoform.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path : '', component: ListaProductosComponent},
{path: 'formulario', component: ProductoformComponent},
{path: 'formulario/:id', component: ProductoformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
