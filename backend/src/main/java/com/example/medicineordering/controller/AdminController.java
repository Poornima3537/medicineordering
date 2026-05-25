package com.pharmacy.controller;

import com.pharmacy.dto.response.OrderResponse;

import com.pharmacy.dto.response.PrescriptionResponse;

import com.pharmacy.entity.OrderStatus;

import com.pharmacy.entity.PaymentStatus;

import com.pharmacy.entity.PrescriptionStatus;

import com.pharmacy.service.AdminService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/admin")

@RequiredArgsConstructor

@CrossOrigin("*")

public class AdminController {

    private final
    AdminService
    adminService;

    /* GET ALL ORDERS */

    @GetMapping("/orders")

    public List<OrderResponse>
    getAllOrders() {

        return adminService
                .getAllOrders();
    }

    /* UPDATE ORDER STATUS */

    @PutMapping(
            "/orders/{id}/status"
    )

    public OrderResponse
    updateOrderStatus(

            @PathVariable
            Long id,

            @RequestParam
            String status
    ) {

        return adminService
                .updateOrderStatus(

                        id,

                        OrderStatus
                                .valueOf(status)
                );
    }

    /* UPDATE PAYMENT STATUS */

    @PutMapping(
            "/orders/{id}/payment"
    )

    public OrderResponse
    updatePaymentStatus(

            @PathVariable
            Long id,

            @RequestParam
            String paymentStatus
    ) {

        return adminService
                .updatePaymentStatus(

                        id,

                        PaymentStatus
                                .valueOf(
                                        paymentStatus
                                )
                );
    }

    /* GET ALL PRESCRIPTIONS */

    @GetMapping(
            "/prescriptions"
    )

    public List<PrescriptionResponse>
    getAllPrescriptions() {

        return adminService
                .getAllPrescriptions();
    }

    /* VALIDATE PRESCRIPTION */

    @PutMapping(
            "/prescriptions/{id}/validate"
    )

    public PrescriptionResponse
    validatePrescription(

            @PathVariable
            Long id
    ) {

        return adminService
                .updatePrescriptionStatus(

                        id,

                        PrescriptionStatus.VALID
                );
    }

    /* REJECT PRESCRIPTION */

    @PutMapping(
            "/prescriptions/{id}/reject"
    )

    public PrescriptionResponse
    rejectPrescription(

            @PathVariable
            Long id
    ) {

        return adminService
                .updatePrescriptionStatus(

                        id,

                        PrescriptionStatus.REJECTED
                );
    }
}