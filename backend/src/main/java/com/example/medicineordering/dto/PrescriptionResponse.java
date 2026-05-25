package com.example.medicineordering.dto;

package com.pharmacy.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class PrescriptionResponse {

    private Long id;

    private Long medicineId;

    private String fileName;

    private String fileType;

    private String status;
}
