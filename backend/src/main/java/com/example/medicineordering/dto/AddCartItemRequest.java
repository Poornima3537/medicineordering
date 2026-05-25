package com.example.medicineordering.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class AddCartItemRequest {

    private Long medicineId;

    private Integer quantity;
}