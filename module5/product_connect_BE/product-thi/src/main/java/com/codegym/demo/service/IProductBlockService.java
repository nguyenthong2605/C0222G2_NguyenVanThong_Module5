package com.codegym.demo.service;

import com.codegym.demo.model.ProductBlock;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductBlockService {
    Page<ProductBlock> getAllProductBlock(Pageable pageable);

    ProductBlock save(ProductBlock productBlock);

    ProductBlock findById(Integer id);

    void delete(ProductBlock productBlock);
}
