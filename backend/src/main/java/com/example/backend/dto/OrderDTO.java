package com.example.backend.dto;

import com.example.backend.domian.order.Order;
import com.example.backend.enumeration.OrderStatus;

import java.util.ArrayList;
import java.util.List;

public class OrderDTO {

    private Long id;
    private OrderStatus status;
    private UserDTO user;
    private List<OrderItemDTO> items = new ArrayList<>();
    private Double getTotal;

    public OrderDTO(Order order) {
        id = order.getId();
        status = order.getStatus();
        user = new UserDTO(order.getClient());
        order.getItems().forEach(item -> this.items.add(new OrderItemDTO(item)));
        getTotal = order.getTotal();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public List<OrderItemDTO> getItems() {
        return items;
    }

    public void setItems(List<OrderItemDTO> items) {
        this.items = items;
    }

    public Double getGetTotal() {
        return getTotal;
    }

    public void setGetTotal(Double getTotal) {
        this.getTotal = getTotal;
    }
}
