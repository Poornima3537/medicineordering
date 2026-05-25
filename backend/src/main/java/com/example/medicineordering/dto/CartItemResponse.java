package com.example.medicineordering.dto;

package com.pharmacy.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class CartItemResponse {

    private Long id;

    private String medicineName;

    private Integer quantity;

    private Double price;

    private Double subtotal;
}
