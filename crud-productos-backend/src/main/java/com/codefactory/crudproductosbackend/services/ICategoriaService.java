package com.codefactory.crudproductosbackend.services;

import com.codefactory.crudproductosbackend.models.entity.Categoria;

import java.util.List;

public interface ICategoriaService {

    public List<Categoria> findAll();

}
