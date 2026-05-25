package com.example.medicineordering.repository;


package com.example.medicineordering.repository;

import com.example.medicineordering.entity.Order;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository
        extends JpaRepository<Order, Long> {

    List<Order>
    findByUserId(Long userId);
}
