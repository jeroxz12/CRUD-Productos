package com.codefactory.crudproductosbackend.services;

import com.codefactory.crudproductosbackend.models.entity.Producto;

import java.util.List;

public interface IProductoService {

    public List<Producto> findAll();
    public Producto findById(Long id);

    public Producto save(Producto producto);

    public void delete(Long id);
}
