package com.codefactory.crudproductosbackend.repository;

import com.codefactory.crudproductosbackend.models.entity.Categoria;
import org.springframework.data.repository.CrudRepository;

public interface CategoriaRepository extends CrudRepository<Categoria, Long> {
}
