package com.example.medicineordering.service;



import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.medicineordering.dto.DosageRequest;
import com.example.medicineordering.dto.DosageResponse;
import com.example.medicineordering.entity.Dosage;
import com.example.medicineordering.repository.DosageRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DosageService {

    private final DosageRepository dosageRepository;

    
    public DosageResponse addDosage(
            DosageRequest request
    ) {

        Dosage dosage = Dosage.builder()
                .value(request.getValue())
                .build();

        Dosage savedDosage =
                dosageRepository.save(dosage);

        return DosageResponse.builder()
                .id(savedDosage.getId())
                .value(savedDosage.getValue())
                .build();
    }

    
    public List<DosageResponse> getAllDosages() {

        return dosageRepository.findAll()
                .stream()
                .map(dosage ->
                        DosageResponse.builder()
                                .id(dosage.getId())
                                .value(dosage.getValue())
                                .build()
                )
                .collect(Collectors.toList());
    }

    public void deleteDosage(Long id) {

        dosageRepository.deleteById(id);
    }
}
