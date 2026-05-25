package com.example.medicineordering.dto;

package com.pharmacy.dto.request;

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