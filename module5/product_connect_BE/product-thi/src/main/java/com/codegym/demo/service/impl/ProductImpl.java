package com.codegym.demo.service.impl;

import com.codegym.demo.model.Product;
import com.codegym.demo.repository.IProductRepository;
import com.codegym.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductImpl implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public List<Product> getAllProduct() {
        return this.iProductRepository.findAll();
    }
}
