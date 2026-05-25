package com.example.medicineordering.entity;


import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "medicines")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Medicine {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false,
            columnDefinition = "TEXT")

    private String description;

    @Column(nullable = false)
    private String manufacturer;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Integer stockQuantity;

    @Column(nullable = false)
    private Boolean prescriptionRequired;
}
