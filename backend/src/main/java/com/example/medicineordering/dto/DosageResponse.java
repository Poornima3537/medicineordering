package com.example.medicineordering.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DosageResponse {

    private Long id;

    private String value;
}