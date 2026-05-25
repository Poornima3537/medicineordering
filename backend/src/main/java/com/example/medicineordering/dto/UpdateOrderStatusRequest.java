package com.example.medicineordering.dto;

package com.pharmacy.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class UpdateOrderStatusRequest {

    private String status;
}
