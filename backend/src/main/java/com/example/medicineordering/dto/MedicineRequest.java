package com.example.medicineordering.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class MedicineRequest {

    private String name;

    private String description;

    private String manufacturer;

    private Double price;

    private Integer stockQuantity;

    private Boolean prescriptionRequired;
}
