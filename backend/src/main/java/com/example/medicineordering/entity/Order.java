package com.example.medicineordering.entity;

package com.pharmacy.entity;

import jakarta.persistence.*;

import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "orders")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Order {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private Long id;

    private Long userId;

    private Long prescriptionId;

    private Double totalAmount;

    @Enumerated(EnumType.STRING)

    private OrderStatus status;

    @Enumerated(EnumType.STRING)

    private PaymentStatus paymentStatus;

    @Column(columnDefinition = "TEXT")

    private String deliveryAddress;

    private LocalDateTime orderDate;
}
