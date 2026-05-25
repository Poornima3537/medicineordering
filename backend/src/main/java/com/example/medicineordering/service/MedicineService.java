package com.example.medicineordering.service;

package com.example.medicineordering.service;

import com.example.medicineordering.dto.MedicineRequest;

import com.example.medicineordering.dto.MedicineResponse;

import com.example.medicineordering.entity.Medicine;

import com.example.medicineordering.repository.MedicineRepository;

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

                .prescriptionRequired(
                        medicine
                                .getPrescriptionRequired()
                )

                .build();
    }
}
