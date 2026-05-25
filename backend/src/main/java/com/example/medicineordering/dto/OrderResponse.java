package com.example.medicineordering.dto;


import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class OrderResponse {

    private Long orderId;

    private Double totalAmount;

    private String status;

    private String paymentStatus;

    private String deliveryAddress;

    private List<OrderItemResponse>
            orderItems;
}
