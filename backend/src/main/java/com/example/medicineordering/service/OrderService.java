package com.example.medicineordering.service;

import com.example.medicineordering.dto.PlaceOrderRequest;

import com.example.medicineordering.dto.OrderItemResponse;

import com.example.medicineordering.dto.OrderResponse;

import com.example.medicineordering.entity.*;

import com.example.medicineordering.repository.*;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.List;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class OrderService {

    private final
    OrderRepository orderRepository;

    private final
    OrderItemRepository
    orderItemRepository;

    private final
    CartRepository cartRepository;

    private final
    CartItemRepository
    cartItemRepository;

    private final
    PrescriptionRepository
    prescriptionRepository;

    /* PLACE ORDER */

    public OrderResponse placeOrder(

            Long userId,

            PlaceOrderRequest request
    ) {

        Cart cart =
                cartRepository
                        .findByUserIdAndIsActive(
                                userId,
                                true
                        )

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Cart Not Found"
                                )
                        );

        List<CartItem> cartItems =
                cartItemRepository
                        .findByCartId(
                                cart.getId()
                        );

        if (cartItems.isEmpty()) {

            throw new RuntimeException(
                    "Cart Is Empty"
            );
        }

        /* CHECK PRESCRIPTION */

        boolean prescriptionRequired =
                cartItems.stream()

                .anyMatch(item ->

                        item.getMedicine()
                                .getPrescriptionRequired()
                );

        if (prescriptionRequired) {

            List<Prescription>
                    prescriptions =

                    prescriptionRepository
                            .findByUserId(
                                    userId
                            );

            boolean validPrescription =
                    prescriptions.stream()

                    .anyMatch(p ->

                            p.getStatus()
                            == PrescriptionStatus.VALID
                    );

            if (!validPrescription) {

                throw new RuntimeException(
                        "Valid Prescription Required"
                );
            }
        }

        /* TOTAL */

        Double totalAmount =
                cartItems.stream()

                .mapToDouble(
                        CartItem::getSubtotal
                )

                .sum();

        /* CREATE ORDER */

        Order order =
                Order.builder()

                .userId(userId)

                .totalAmount(
                        totalAmount
                )

                .status(
                        OrderStatus.PENDING
                )

                .paymentStatus(
                        PaymentStatus.PENDING
                )

                .deliveryAddress(
                        request
                                .getDeliveryAddress()
                )

                .orderDate(
                        LocalDateTime.now()
                )

                .build();

        Order savedOrder =
                orderRepository.save(
                        order
                );

        /* CREATE ORDER ITEMS */

        List<OrderItem> orderItems =
                cartItems.stream()

                .map(cartItem ->

                        OrderItem.builder()

                        .order(savedOrder)

                        .medicine(
                                cartItem
                                        .getMedicine()
                        )

                        .quantity(
                                cartItem
                                        .getQuantity()
                        )

                        .price(
                                cartItem
                                        .getMedicine()
                                        .getPrice()
                        )

                        .subtotal(
                                cartItem
                                        .getSubtotal()
                        )

                        .build()
                )

                .collect(Collectors.toList());

        orderItemRepository
                .saveAll(orderItems);

        /* CLEAR CART */

        cartItemRepository
                .deleteAll(cartItems);

        cart.setIsActive(false);

        cartRepository.save(cart);

        return mapToResponse(
                savedOrder,
                orderItems
        );
    }

    /* GET USER ORDERS */

    public List<OrderResponse>
    getUserOrders(
            Long userId
    ) {

        List<Order> orders =
                orderRepository
                        .findByUserId(
                                userId
                        );

        return orders.stream()

                .map(order -> {

                    List<OrderItem>
                            orderItems =

                            orderItemRepository
                                    .findByOrderId(
                                            order.getId()
                                    );

                    return mapToResponse(
                            order,
                            orderItems
                    );
                })

                .collect(Collectors.toList());
    }

    /* MAP TO RESPONSE */

    private OrderResponse
    mapToResponse(

            Order order,

            List<OrderItem> orderItems
    ) {

        List<OrderItemResponse>
                itemResponses =

                orderItems.stream()

                .map(item ->

                        OrderItemResponse
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

                .collect(Collectors.toList());

        return OrderResponse
                .builder()

                .orderId(
                        order.getId()
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
                        itemResponses
                )

                .build();
    }
}