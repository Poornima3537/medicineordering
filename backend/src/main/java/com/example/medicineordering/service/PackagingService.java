package com.example.medicineordering.service;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.medicineordering.dto.PackagingRequest;
import com.example.medicineordering.dto.PackagingResponse;
import com.example.medicineordering.entity.Packaging;
import com.example.medicineordering.repository.PackagingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PackagingService {

    private final PackagingRepository packagingRepository;

   
    public PackagingResponse addPackaging(
            PackagingRequest request
    ) {

        Packaging packaging = Packaging.builder()
                .type(request.getType())
                .build();

        Packaging savedPackaging =
                packagingRepository.save(packaging);

        return PackagingResponse.builder()
                .id(savedPackaging.getId())
                .type(savedPackaging.getType())
                .build();
    }

    
    public List<PackagingResponse> getAllPackagings() {

        return packagingRepository.findAll()
                .stream()
                .map(packaging ->
                        PackagingResponse.builder()
                                .id(packaging.getId())
                                .type(packaging.getType())
                                .build()
                )
                .collect(Collectors.toList());
    }
}