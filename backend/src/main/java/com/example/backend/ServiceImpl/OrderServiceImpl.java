package com.example.backend.ServiceImpl;

import com.example.backend.domian.order.Order;
import com.example.backend.dto.OrderDTO;
import com.example.backend.exception.domain.order.OrderNotFoundException;
import com.example.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class OrderServiceImpl {

    private OrderRepository repository;

    @Autowired
    public OrderServiceImpl(OrderRepository repository) {
        this.repository = repository;
    }

    public List<OrderDTO> findAll() {
        List<Order> list = repository.findAll();
        return list.stream().map(OrderDTO::new).collect(Collectors.toList());
    }

    public OrderDTO findById(Long id) {
        return new OrderDTO(repository.findById(id).orElseThrow(() -> new OrderNotFoundException(id)));
    }

    public void insert(Order order) {
        repository.save(order);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
