package com.example.backend.domian.OrderItem;

import com.example.backend.domian.collection.Game;
import com.example.backend.domian.order.Order;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "tb_order_item")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer qty;

    @Column(nullable = false)
    private Double price;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game game;


    public OrderItem() {
    }

    public OrderItem(Long id, Integer qty, Double price, Game game, Order order) {
        this.id = id;
        this.qty = qty;
        this.price = price;
        this.game = game;

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

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }



    public double getSubTotal() {
        return price * qty;
    }

    @Override
    public String toString() {
        return "OrderItem{" +
                "id=" + id +
                ", qty=" + qty +
                ", price=" + price +
                ", game=" + game +
                '}';
    }
}
