package com.example.medicineordering.service;

import com.example.medicineordering.dto.PrescriptionRequest;

import com.example.medicineordering.dto.PrescriptionResponse;

import com.example.medicineordering.entity.Prescription;

import com.example.medicineordering.entity.PrescriptionStatus;

import com.example.medicineordering.repository.PrescriptionRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.List;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class PrescriptionService {

    private final
    PrescriptionRepository
    prescriptionRepository;

    /* UPLOAD PRESCRIPTION */

    public PrescriptionResponse
    uploadPrescription(

            Long userId,

            PrescriptionRequest request
    ) {

        Prescription prescription =
                Prescription.builder()

                .userId(userId)

                .medicineId(
                        request.getMedicineId()
                )

                .fileName(
                        request.getFileName()
                )

                .fileType(
                        request.getFileType()
                )

                .status(
                        PrescriptionStatus.PENDING
                )

                .uploadedAt(
                        LocalDateTime.now()
                )

                .build();

        Prescription savedPrescription =
                prescriptionRepository.save(
                        prescription
                );

        return mapToResponse(
                savedPrescription
        );
    }

    /* GET USER PRESCRIPTIONS */

    public List<PrescriptionResponse>
    getUserPrescriptions(
            Long userId
    ) {

        List<Prescription>
                prescriptions =

                prescriptionRepository
                        .findByUserId(
                                userId
                        );

        return prescriptions.stream()

                .map(this::mapToResponse)

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

        return mapToResponse(
                updatedPrescription
        );
    }

    /* MAP ENTITY TO DTO */

    private PrescriptionResponse
    mapToResponse(
            Prescription prescription
    ) {

        return PrescriptionResponse
                .builder()

                .id(
                        prescription.getId()
                )

                .medicineId(
                        prescription.getMedicineId()
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
}