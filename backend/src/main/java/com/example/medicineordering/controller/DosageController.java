package com.example.medicineordering.controller;

import com.example.medicineordering.dto.DosageRequest;
import com.example.medicineordering.dto.DosageResponse;
import com.example.medicineordering.service.DosageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dosages")
@RequiredArgsConstructor
public class DosageController {

    private final DosageService dosageService;

    @PostMapping
    public ResponseEntity<DosageResponse> addDosage(@RequestBody DosageRequest request) {
        return ResponseEntity.ok(dosageService.addDosage(request));
    }

    @GetMapping
    public ResponseEntity<List<DosageResponse>> getAllDosages() {
        return ResponseEntity.ok(dosageService.getAllDosages());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDosage(@PathVariable Long id) {
        dosageService.deleteDosage(id);
        return ResponseEntity.ok("Dosage Deleted Successfully");
    }
}
