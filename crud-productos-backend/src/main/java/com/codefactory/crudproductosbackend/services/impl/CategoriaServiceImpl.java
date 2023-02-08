package com.codefactory.crudproductosbackend.services.impl;

import com.codefactory.crudproductosbackend.models.entity.Categoria;
import com.codefactory.crudproductosbackend.repository.CategoriaRepository;
import com.codefactory.crudproductosbackend.services.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoriaServiceImpl implements ICategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;


    @Override
    public List<Categoria> findAll() {
        List<Categoria> lista = (List<Categoria>) categoriaRepository.findAll();

        lista.stream().forEach(categoria -> {
            System.out.println(categoria.getNombre());
        });

        return lista;
    }
}
