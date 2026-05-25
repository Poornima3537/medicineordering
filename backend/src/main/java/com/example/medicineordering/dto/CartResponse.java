package com.example.medicineordering.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class CartResponse {

    private Long cartId;

    private List<CartItemResponse>
            cartItems;

    private Double totalAmount;
}