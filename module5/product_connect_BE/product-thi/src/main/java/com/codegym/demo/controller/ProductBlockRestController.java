package com.codegym.demo.controller;

import com.codegym.demo.model.Product;
import com.codegym.demo.model.ProductBlock;
import com.codegym.demo.service.IProductBlockService;
import com.codegym.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/productBlock")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductBlockRestController {
    @Autowired
    private IProductBlockService iProductBlockService;


    @GetMapping("/list")
    public ResponseEntity<Page<ProductBlock>> getListProductBlock(@PageableDefault(value = 3) Pageable pageable) {
        Page<ProductBlock> productBlocks = this.iProductBlockService.getAllProductBlock(pageable);
        if (!productBlocks.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productBlocks, HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<ProductBlock> saveProductBlock(@RequestBody ProductBlock productBlock) {
        this.iProductBlockService.save(productBlock);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProductBlock> findById(@PathVariable("id") Integer id){
        ProductBlock productBlock = this.iProductBlockService.findById(id);
        if (productBlock == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productBlock, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ProductBlock> deleteProductBlock(@PathVariable("id") Integer id) {
        ProductBlock productBlock = iProductBlockService.findById(id);
        if(productBlock == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        this.iProductBlockService.delete(productBlock);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    }

