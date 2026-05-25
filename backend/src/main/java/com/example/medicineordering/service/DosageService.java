package com.example.medicineordering.service;

import com.example.medicineordering.dto.DosageRequest;
import com.example.medicineordering.dto.DosageResponse;

import java.util.List;

public interface DosageService {

    DosageResponse addDosage(DosageRequest request);

    List<DosageResponse> getAllDosages();
}