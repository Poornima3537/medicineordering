package com.example.medicineordering.controller;

import com.example.medicineordering.dto.PlaceOrderRequest;

import com.example.medicineordering.dto.OrderResponse;

import com.example.medicineordering.service.OrderService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/orders")

@RequiredArgsConstructor

@CrossOrigin("*")

public class OrderController {

    private final
    OrderService
    orderService;

    /*
       TEMP USER ID
       Later JWT integration
       will replace this
    */

    private final Long USER_ID = 1L;

    /* PLACE ORDER */

    @PostMapping("/place")

    public OrderResponse placeOrder(

            @RequestBody
            PlaceOrderRequest request
    ) {

        return orderService
                .placeOrder(

                        USER_ID,

                        request
                );
    }

    /* GET USER ORDERS */

    @GetMapping("/my")

    public List<OrderResponse>
    getUserOrders() {

        return orderService
                .getUserOrders(
                        USER_ID
                );
    }
}