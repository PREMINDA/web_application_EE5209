package com.example.backend.dto;

import com.example.backend.domian.OrderItem.OrderItem;

public class OrderItemDTO {

    private Long id;
    private Integer qty;
    private Double price;
    private String product;
    private Long order;
    public double getSubTotal;

    public OrderItemDTO(OrderItem orderItem) {
        id = orderItem.getId();
        qty = orderItem.getQty();
        price = orderItem.getPrice();
        product = orderItem.getGame().getGameName();
        getSubTotal = orderItem.getSubTotal();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQty() {
        return qty;
    }

    public void setQty(Integer qty) {
        this.qty = qty;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public Long getOrder() {
        return order;
    }

    public void setOrder(Long order) {
        this.order = order;
    }

    public double getGetSubTotal() {
        return getSubTotal;
    }

    public void setGetSubTotal(double getSubTotal) {
        this.getSubTotal = getSubTotal;
    }





}
