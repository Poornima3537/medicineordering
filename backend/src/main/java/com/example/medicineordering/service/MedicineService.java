package com.example.medicineordering.service;


import com.example.medicineordering.dto.MedicineRequest;

import com.example.medicineordering.dto.MedicineResponse;

import com.example.medicineordering.entity.Medicine;

import com.example.medicineordering.repository.CategoryRepository;

import com.example.medicineordering.repository.DosageRepository;

import com.example.medicineordering.repository.MedicineRepository;

import com.example.medicineordering.repository.PackagingRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class MedicineService {

    private final
    MedicineRepository
    medicineRepository;

    private final
    CategoryRepository
    categoryRepository;

    private final
    DosageRepository
    dosageRepository;

    private final
    PackagingRepository
    packagingRepository;

    /* GET ALL MEDICINES */

    public List<MedicineResponse>
    getAllMedicines() {

        List<Medicine> medicines =
                medicineRepository.findAll();

        return medicines.stream()

                .map(this::mapToResponse)

                .collect(Collectors.toList());
    }

    /* ADD MEDICINE */

    public MedicineResponse
    addMedicine(
            MedicineRequest request
    ) {

        Medicine medicine =
                Medicine.builder()

                .name(request.getName())

                .description(
                        request.getDescription()
                )

                .manufacturer(
                        request.getManufacturer()
                )

                .price(
                        request.getPrice()
                )

                .stockQuantity(
                        request.getStockQuantity()
                )

                .categoryId(
                        request.getCategoryId()
                )

                .dosageId(
                        request.getDosageId()
                )

                .packagingId(
                        request.getPackagingId()
                )

                .prescriptionRequired(
                        request.getPrescriptionRequired()
                )

                .build();

        Medicine savedMedicine =
                medicineRepository.save(
                        medicine
                );

        return mapToResponse(
                savedMedicine
        );
    }

    /* UPDATE MEDICINE */

    public MedicineResponse
    updateMedicine(
            Long id,
            MedicineRequest request
    ) {

        Medicine medicine =
                medicineRepository
                        .findById(id)

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Medicine Not Found"
                                )
                        );

        medicine.setName(
                request.getName()
        );

        medicine.setDescription(
                request.getDescription()
        );

        medicine.setManufacturer(
                request.getManufacturer()
        );

        medicine.setPrice(
                request.getPrice()
        );

        medicine.setStockQuantity(
                request.getStockQuantity()
        );

        medicine.setCategoryId(
                request.getCategoryId()
        );

        medicine.setDosageId(
                request.getDosageId()
        );

        medicine.setPackagingId(
                request.getPackagingId()
        );

        medicine.setPrescriptionRequired(
                request.getPrescriptionRequired()
        );

        Medicine updatedMedicine =
                medicineRepository.save(
                        medicine
                );

        return mapToResponse(
                updatedMedicine
        );
    }

    /* DELETE MEDICINE */

    public void deleteMedicine(
            Long id
    ) {

        medicineRepository
                .deleteById(id);
    }

    /* MAP ENTITY TO DTO */

    private MedicineResponse
    mapToResponse(
            Medicine medicine
    ) {

        return MedicineResponse
                .builder()

                .id(
                        medicine.getId()
                )

                .name(
                        medicine.getName()
                )

                .description(
                        medicine.getDescription()
                )

                .manufacturer(
                        medicine.getManufacturer()
                )

                .price(
                        medicine.getPrice()
                )

                .stockQuantity(
                        medicine.getStockQuantity()
                )

                .categoryId(
                        medicine.getCategoryId()
                )

                .categoryName(
                        getCategoryName(
                                medicine.getCategoryId()
                        )
                )

                .dosageId(
                        medicine.getDosageId()
                )

                .dosageValue(
                        getDosageValue(
                                medicine.getDosageId()
                        )
                )

                .packagingId(
                        medicine.getPackagingId()
                )

                .packagingType(
                        getPackagingType(
                                medicine.getPackagingId()
                        )
                )

                .prescriptionRequired(
                        medicine
                                .getPrescriptionRequired()
                )

                .build();
    }

    private String getCategoryName(
            Long categoryId
    ) {

        if (categoryId == null) {
            return "";
        }

        return categoryRepository
                .findById(categoryId)
                .map(category ->
                        category.getName()
                )
                .orElse("");
    }

    private String getDosageValue(
            Long dosageId
    ) {

        if (dosageId == null) {
            return "";
        }

        return dosageRepository
                .findById(dosageId)
                .map(dosage ->
                        dosage.getValue()
                )
                .orElse("");
    }

    private String getPackagingType(
            Long packagingId
    ) {

        if (packagingId == null) {
            return "";
        }

        return packagingRepository
                .findById(packagingId)
                .map(packaging ->
                        packaging.getType()
                )
                .orElse("");
    }
}
