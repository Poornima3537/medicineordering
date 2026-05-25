package com.example.medicineordering.controller;

import com.example.medicineordering.dto.PlaceOrderRequest;

import com.example.medicineordering.dto.OrderResponse;

import com.example.medicineordering.service.OrderService;

import com.example.medicineordering.service.CurrentUserService;

import jakarta.servlet.http.HttpServletRequest;

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

    private final
    CurrentUserService
    currentUserService;

    /* PLACE ORDER */

    @PostMapping("/place")

    public OrderResponse placeOrder(

            @RequestBody
            PlaceOrderRequest request,

            HttpServletRequest httpRequest
    ) {

        return orderService
                .placeOrder(

                        currentUserService
                                .getCurrentUserId(
                                        httpRequest
                                ),

                        request
                );
    }

    /* GET USER ORDERS */

    @GetMapping("/my")

    public List<OrderResponse>
    getUserOrders(
            HttpServletRequest request
    ) {

        return orderService
                .getUserOrders(
                        currentUserService
                                .getCurrentUserId(
                                        request
                                )
                );
    }
}
