package com.example.medicineordering.service;

import com.example.medicineordering.dto.OrderResponse;

import com.example.medicineordering.dto.PrescriptionResponse;

import com.example.medicineordering.dto.UserResponse;

import com.example.medicineordering.entity.*;

import com.example.medicineordering.repository.*;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class AdminService {

    private final
    OrderRepository orderRepository;

    private final
    OrderItemRepository
    orderItemRepository;

    private final
    PrescriptionRepository
    prescriptionRepository;

    private final
    UserRepository
    userRepository;

    private final
    MedicineRepository
    medicineRepository;

    /* GET ALL USERS */

    public List<UserResponse>
    getAllUsers() {

        return userRepository.findAll()
                .stream()
                .map(user ->
                        UserResponse.builder()
                                .id(user.getId())
                                .name(user.getName())
                                .email(user.getEmail())
                                .role(user.getRole().name())
                                .build()
                )
                .collect(Collectors.toList());
    }

    /* GET ALL ORDERS */

    public List<OrderResponse>
    getAllOrders() {

        List<Order> orders =
                orderRepository.findAll();

        return orders.stream()

                .map(order -> {

                    List<OrderItem>
                            orderItems =

                            orderItemRepository
                                    .findByOrderId(
                                            order.getId()
                                    );

                    return mapOrderResponse(
                            order,
                            orderItems
                    );
                })

                .collect(Collectors.toList());
    }

    /* UPDATE ORDER STATUS */

    public OrderResponse
    updateOrderStatus(

            Long orderId,

            OrderStatus status
    ) {

        Order order =
                orderRepository
                        .findById(orderId)

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Order Not Found"
                                )
                        );

        order.setStatus(status);

        Order updatedOrder =
                orderRepository.save(
                        order
                );

        List<OrderItem>
                orderItems =

                orderItemRepository
                        .findByOrderId(
                                updatedOrder.getId()
                        );

        return mapOrderResponse(
                updatedOrder,
                orderItems
        );
    }

    /* UPDATE PAYMENT STATUS */

    public OrderResponse
    updatePaymentStatus(

            Long orderId,

            PaymentStatus paymentStatus
    ) {

        Order order =
                orderRepository
                        .findById(orderId)

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Order Not Found"
                                )
                        );

        order.setPaymentStatus(
                paymentStatus
        );

        Order updatedOrder =
                orderRepository.save(
                        order
                );

        List<OrderItem>
                orderItems =

                orderItemRepository
                        .findByOrderId(
                                updatedOrder.getId()
                        );

        return mapOrderResponse(
                updatedOrder,
                orderItems
        );
    }

    /* GET ALL PRESCRIPTIONS */

    public List<PrescriptionResponse>
    getAllPrescriptions() {

        List<Prescription>
                prescriptions =

                prescriptionRepository
                        .findAll();

        return prescriptions.stream()

                .map(this::mapPrescriptionResponse)

                .collect(Collectors.toList());
    }

    /* UPDATE PRESCRIPTION STATUS */

    public PrescriptionResponse
    updatePrescriptionStatus(

            Long prescriptionId,

            PrescriptionStatus status
    ) {

        Prescription prescription =
                prescriptionRepository
                        .findById(
                                prescriptionId
                        )

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Prescription Not Found"
                                )
                        );

        prescription.setStatus(
                status
        );

        Prescription updatedPrescription =
                prescriptionRepository
                        .save(
                                prescription
                        );

        return mapPrescriptionResponse(
                updatedPrescription
        );
    }

    /* MAP ORDER RESPONSE */

    private OrderResponse
    mapOrderResponse(

            Order order,

            List<OrderItem> orderItems
    ) {

        return OrderResponse
                .builder()

                .orderId(
                        order.getId()
                )

                .userName(
                        getUserName(
                                order.getUserId()
                        )
                )

                .totalAmount(
                        order.getTotalAmount()
                )

                .status(
                        order.getStatus()
                                .name()
                )

                .paymentStatus(
                        order.getPaymentStatus()
                                .name()
                )

                .deliveryAddress(
                        order.getDeliveryAddress()
                )

                .orderItems(

                        orderItems.stream()

                        .map(item ->

                                com.example.medicineordering.dto
                                .OrderItemResponse

                                .builder()

                                .medicineId(
                                        item.getMedicine()
                                                .getId()
                                )

                                .medicineName(
                                        item.getMedicine()
                                                .getName()
                                )

                                .quantity(
                                        item.getQuantity()
                                )

                                .price(
                                        item.getPrice()
                                )

                                .subtotal(
                                        item.getSubtotal()
                                )

                                .build()
                        )

                        .collect(Collectors.toList())
                )

                .build();
    }

    /* MAP PRESCRIPTION RESPONSE */

    private PrescriptionResponse
    mapPrescriptionResponse(
            Prescription prescription
    ) {

        return PrescriptionResponse
                .builder()

                .id(
                        prescription.getId()
                )

                .userName(
                        getUserName(
                                prescription.getUserId()
                        )
                )

                .medicineId(
                        prescription.getMedicineId()
                )

                .medicineName(
                        getMedicineName(
                                prescription.getMedicineId()
                        )
                )

                .fileName(
                        prescription.getFileName()
                )

                .fileType(
                        prescription.getFileType()
                )

                .status(
                        prescription.getStatus()
                                .name()
                )

                .build();
    }

    private String getUserName(
            Long userId
    ) {

        if (userId == null) {
            return "";
        }

        return userRepository
                .findById(userId)
                .map(user ->
                        user.getName()
                )
                .orElse("");
    }

    private String getMedicineName(
            Long medicineId
    ) {

        if (medicineId == null) {
            return "";
        }

        return medicineRepository
                .findById(medicineId)
                .map(medicine ->
                        medicine.getName()
                )
                .orElse("");
    }
}
