import { Categoria } from "./categoria";

export class Producto {

    id!:number;
    nombre!: string;
    precio!: number;
    stock!: number;
    imagen!: string;
    categoria!: Categoria;
    createdAt!: string;
    
}
