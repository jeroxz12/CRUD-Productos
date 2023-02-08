package com.codefactory.crudproductosbackend.repository;

import com.codefactory.crudproductosbackend.models.entity.Producto;
import org.springframework.data.repository.CrudRepository;

public interface ProductoRepository extends CrudRepository<Producto, Long> {

}