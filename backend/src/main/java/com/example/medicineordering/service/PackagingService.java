package com.example.medicineordering.service;

import com.example.medicineordering.dto.PackagingRequest;
import com.example.medicineordering.dto.PackagingResponse;

import java.util.List;

public interface PackagingService {

    PackagingResponse addPackaging(PackagingRequest request);

    List<PackagingResponse> getAllPackagings();
}