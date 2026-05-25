package com.example.medicineordering.entity;

package com.pharmacy.entity;

import jakarta.persistence.*;

import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "prescriptions")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Prescription {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private Long id;

    private Long userId;

    private Long medicineId;

    private String fileName;

    private String fileType;

    @Enumerated(EnumType.STRING)

    private PrescriptionStatus status;

    private LocalDateTime uploadedAt;
}