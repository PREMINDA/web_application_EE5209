package com.example.backend.domian.order;

import com.example.backend.domian.OrderItem.OrderItem;
import com.example.backend.domian.user.User;
import com.example.backend.enumeration.OrderStatus;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private OrderStatus status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User client;

    @OneToMany(cascade = CascadeType.ALL,targetEntity = OrderItem.class)
    @JoinColumn(name="fk",referencedColumnName = "id")
    private List<OrderItem> items ;

    public Order() {
    }

    public Order(Long id, OrderStatus status, User client, List<OrderItem> items) {
        this.id = id;
        this.status = status;
        this.client = client;
        this.items = items;
    }

    public double getTotal() {
        double sum = 0.0;
        for (OrderItem item : items) {
            sum += item.getSubTotal();
        }
        return sum;
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

    public User getClient() {
        return client;
    }

    public void setClient(User client) {
        this.client = client;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }
}
