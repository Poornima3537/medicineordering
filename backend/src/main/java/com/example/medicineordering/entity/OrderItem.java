package com.example.medicineordering.entity;

package com.pharmacy.entity;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "order_items")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class OrderItem {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id")

    private Order order;

    @ManyToOne
    @JoinColumn(name = "medicine_id")

    private Medicine medicine;

    private Integer quantity;

    private Double price;

    private Double subtotal;
}
