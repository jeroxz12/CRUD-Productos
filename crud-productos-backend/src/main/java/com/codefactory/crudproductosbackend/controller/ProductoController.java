package com.codefactory.crudproductosbackend.controller;

import com.codefactory.crudproductosbackend.models.entity.Categoria;
import com.codefactory.crudproductosbackend.models.entity.Producto;
import com.codefactory.crudproductosbackend.services.ICategoriaService;
import com.codefactory.crudproductosbackend.services.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping( value = "/api/productos")
public class ProductoController {

    @Autowired
    private ICategoriaService categoriaService;

    @Autowired
    private IProductoService productoService;

    @GetMapping(path = "/categorias")
    public ResponseEntity<List<Categoria>> listarCategorias(){
        return new ResponseEntity<>(categoriaService.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/listar")
    public ResponseEntity<List<Producto>> listarProductos(){
        return new ResponseEntity<>(productoService.findAll(), HttpStatus.OK);
    }

    @PostMapping(path = "/crear")
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto){
        return new ResponseEntity<>(productoService.save(producto), HttpStatus.CREATED);
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable("id") Long id, @RequestBody Producto producto){
        Producto productoEncontrado = productoService.findById(id);

        if( productoEncontrado == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        try {
            productoEncontrado.setNombre(producto.getNombre());
            productoEncontrado.setPrecio(producto.getPrecio());
            productoEncontrado.setStock(producto.getStock());
            productoEncontrado.setCategoria(producto.getCategoria());
            productoEncontrado.setImagen(producto.getImagen());
            productoEncontrado.setCreatedAt(producto.getCreatedAt());
            return new ResponseEntity<>(productoService.save(productoEncontrado), HttpStatus.OK);
        } catch (DataAccessException ex){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> actualizarProducto(@PathVariable("id") Long id) {
     productoService.delete(id);
     return  new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public Producto verPorId(@PathVariable("id") Long id){
        return productoService.findById(id);
    }

}
