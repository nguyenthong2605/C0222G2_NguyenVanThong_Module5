package com.codegym.demo.repository;

import com.codegym.demo.model.ProductBlock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductBlockRepository extends JpaRepository<ProductBlock, Integer> {
}
