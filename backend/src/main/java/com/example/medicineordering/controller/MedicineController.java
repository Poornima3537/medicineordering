package com.example.medicineordering.controller;
package com.pharmacy.controller;

import com.pharmacy.dto.request.MedicineRequest;

import com.pharmacy.dto.response.MedicineResponse;

import com.pharmacy.service.MedicineService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api")

@RequiredArgsConstructor

@CrossOrigin("*")

public class MedicineController {

    private final
    MedicineService
    medicineService;

    /* GET ALL MEDICINES */

    @GetMapping("/medicines")

    public List<MedicineResponse>
    getAllMedicines() {

        return medicineService
                .getAllMedicines();
    }

    /* ADD MEDICINE */

    @PostMapping("/admin/medicines")

    @ResponseStatus(
            HttpStatus.CREATED
    )

    public MedicineResponse
    addMedicine(

            @RequestBody
            MedicineRequest request
    ) {

        return medicineService
                .addMedicine(request);
    }

    /* UPDATE MEDICINE */

    @PutMapping(
            "/admin/medicines/{id}"
    )

    public MedicineResponse
    updateMedicine(

            @PathVariable
            Long id,

            @RequestBody
            MedicineRequest request
    ) {

        return medicineService
                .updateMedicine(
                        id,
                        request
                );
    }

    /* DELETE MEDICINE */

    @DeleteMapping(
            "/admin/medicines/{id}"
    )

    public String deleteMedicine(

            @PathVariable
            Long id
    ) {

        medicineService
                .deleteMedicine(id);

        return "Medicine Deleted Successfully";
    }
}
