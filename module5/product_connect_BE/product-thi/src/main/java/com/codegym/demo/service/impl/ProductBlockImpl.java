package com.codegym.demo.service.impl;

import com.codegym.demo.model.ProductBlock;
import com.codegym.demo.repository.IProductBlockRepository;
import com.codegym.demo.service.IProductBlockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductBlockImpl implements IProductBlockService {
    @Autowired
    private IProductBlockRepository iProductBlockRepository;

    @Override
    public Page<ProductBlock> getAllProductBlock(Pageable pageable) {
        return this.iProductBlockRepository.findAll(pageable);
    }

    @Override
    public ProductBlock save(ProductBlock productBlock) {
       return this.iProductBlockRepository.save(productBlock);
    }

    @Override
    public ProductBlock findById(Integer id) {
        return this.iProductBlockRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(ProductBlock productBlock) {
        this.iProductBlockRepository.delete(productBlock);
    }
}
