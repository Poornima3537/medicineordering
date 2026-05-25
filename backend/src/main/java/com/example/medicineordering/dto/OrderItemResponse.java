package com.example.medicineordering.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class OrderItemResponse {

    private Long medicineId;

    private String medicineName;

    private Integer quantity;

    private Double price;

    private Double subtotal;
}