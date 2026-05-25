package com.example.medicineordering.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class MedicineResponse {

    private Long id;

    private String name;

    private String description;

    private String manufacturer;

    private Double price;

    private Integer stockQuantity;

    private Long categoryId;

    private String categoryName;

    private Long dosageId;

    private String dosageValue;

    private Long packagingId;

    private String packagingType;

    private Boolean prescriptionRequired;
}
