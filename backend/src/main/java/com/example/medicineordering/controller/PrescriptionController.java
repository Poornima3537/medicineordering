package com.pharmacy.controller;

import com.pharmacy.dto.request.PrescriptionRequest;

import com.pharmacy.dto.response.PrescriptionResponse;

import com.pharmacy.entity.PrescriptionStatus;

import com.pharmacy.service.PrescriptionService;

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

    /*
       TEMP USER ID
       Later JWT integration
       will replace this
    */

    private final Long USER_ID = 1L;

    /* UPLOAD PRESCRIPTION */

    @PostMapping("/upload")

    public PrescriptionResponse
    uploadPrescription(

            @RequestBody
            PrescriptionRequest request
    ) {

        return prescriptionService
                .uploadPrescription(

                        USER_ID,

                        request
                );
    }

    /* GET USER PRESCRIPTIONS */

    @GetMapping("/my")

    public List<PrescriptionResponse>
    getUserPrescriptions() {

        return prescriptionService
                .getUserPrescriptions(
                        USER_ID
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