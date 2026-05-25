package com.example.medicineordering.controller;

import com.example.medicineordering.dto.PrescriptionRequest;

import com.example.medicineordering.dto.PrescriptionResponse;

import com.example.medicineordering.entity.PrescriptionStatus;

import com.example.medicineordering.service.PrescriptionService;

import com.example.medicineordering.service.CurrentUserService;

import jakarta.servlet.http.HttpServletRequest;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/prescriptions")

@RequiredArgsConstructor

@CrossOrigin("*")

public class PrescriptionController {

    private final
    PrescriptionService
    prescriptionService;

    private final
    CurrentUserService
    currentUserService;

    /* UPLOAD PRESCRIPTION */

    @PostMapping("/upload")

    public PrescriptionResponse
    uploadPrescription(

            @RequestBody
            PrescriptionRequest request,

            HttpServletRequest httpRequest
    ) {

        return prescriptionService
                .uploadPrescription(

                        currentUserService
                                .getCurrentUserId(
                                        httpRequest
                                ),

                        request
                );
    }

    /* GET USER PRESCRIPTIONS */

    @GetMapping("/my")

    public List<PrescriptionResponse>
    getUserPrescriptions(
            HttpServletRequest request
    ) {

        return prescriptionService
                .getUserPrescriptions(
                        currentUserService
                                .getCurrentUserId(
                                        request
                                )
                );
    }

    /* VALIDATE PRESCRIPTION */

    @PutMapping(
            "/validate/{id}"
    )

    public PrescriptionResponse
    validatePrescription(

            @PathVariable
            Long id
    ) {

        return prescriptionService
                .updatePrescriptionStatus(

                        id,

                        PrescriptionStatus.VALID
                );
    }

    /* REJECT PRESCRIPTION */

    @PutMapping(
            "/reject/{id}"
    )

    public PrescriptionResponse
    rejectPrescription(

            @PathVariable
            Long id
    ) {

        return prescriptionService
                .updatePrescriptionStatus(

                        id,

                        PrescriptionStatus.REJECTED
                );
    }
}
