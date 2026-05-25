package com.example.medicineordering.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class PrescriptionResponse {

    private Long id;

    private String userName;

    private Long medicineId;

    private String medicineName;

    private String fileName;

    private String fileType;

    private String status;
}
