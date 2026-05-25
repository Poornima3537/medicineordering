package com.example.medicineordering.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class PrescriptionRequest {

    private Long medicineId;

    private String fileName;

    private String fileType;
}
