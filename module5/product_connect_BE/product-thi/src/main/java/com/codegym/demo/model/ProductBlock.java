package com.codegym.demo.model;

import javax.persistence.*;

@Entity
public class ProductBlock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String idProductBlock;
    @ManyToOne
    @JoinColumn(name = "product", referencedColumnName = "id")
    private Product product;
    private Integer quantity;
    private String dayAdd;
    private String dateOfManufacture;
    private String dateExpiration;

    public ProductBlock() {
    }

    public ProductBlock(Integer id, String idProductBlock, Product product, Integer quantity, String dayAdd, String dateOfManufacture, String dateExpiration) {
        this.id = id;
        this.idProductBlock = idProductBlock;
        this.product = product;
        this.quantity = quantity;
        this.dayAdd = dayAdd;
        this.dateOfManufacture = dateOfManufacture;
        this.dateExpiration = dateExpiration;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIdProductBlock() {
        return idProductBlock;
    }

    public void setIdProductBlock(String idProductBlock) {
        this.idProductBlock = idProductBlock;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getDayAdd() {
        return dayAdd;
    }

    public void setDayAdd(String dayAdd) {
        this.dayAdd = dayAdd;
    }

    public String getDateOfManufacture() {
        return dateOfManufacture;
    }

    public void setDateOfManufacture(String dateOfManufacture) {
        this.dateOfManufacture = dateOfManufacture;
    }

    public String getDateExpiration() {
        return dateExpiration;
    }

    public void setDateExpiration(String dateExpiration) {
        this.dateExpiration = dateExpiration;
    }
}
