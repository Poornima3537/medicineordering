package com.example.medicineordering.controller;

import com.example.medicineordering.dto.OrderResponse;

import com.example.medicineordering.dto.PrescriptionResponse;

import com.example.medicineordering.dto.UserResponse;

import com.example.medicineordering.entity.OrderStatus;

import com.example.medicineordering.entity.PaymentStatus;

import com.example.medicineordering.entity.PrescriptionStatus;

import com.example.medicineordering.service.AdminService;

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

    /* GET ALL USERS */

    @GetMapping("/users")

    public List<UserResponse>
    getAllUsers() {

        return adminService
                .getAllUsers();
    }

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
