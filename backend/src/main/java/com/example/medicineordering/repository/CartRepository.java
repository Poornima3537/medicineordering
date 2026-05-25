package com.example.medicineordering.repository;


import com.example.medicineordering.entity.Cart;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository
        extends JpaRepository<Cart, Long> {

    Optional<Cart>
    findByUserIdAndIsActive(
            Long userId,
            Boolean isActive
    );
}
