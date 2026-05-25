package com.example.medicineordering.controller;

import com.example.medicineordering.dto.PackagingRequest;
import com.example.medicineordering.dto.PackagingResponse;
import com.example.medicineordering.service.PackagingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/packagings")
@RequiredArgsConstructor
public class PackagingController {

    private final PackagingService packagingService;

    @PostMapping
    public ResponseEntity<PackagingResponse> addPackaging(@RequestBody PackagingRequest request) {
        return ResponseEntity.ok(packagingService.addPackaging(request));
    }

    @GetMapping
    public ResponseEntity<List<PackagingResponse>> getAllPackagings() {
        return ResponseEntity.ok(packagingService.getAllPackagings());
    }
}