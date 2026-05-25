package com.example.medicineordering.repository;


import com.example.medicineordering.entity.Prescription;

import com.example.medicineordering.entity.PrescriptionStatus;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PrescriptionRepository
        extends JpaRepository<Prescription, Long> {

    List<Prescription>
    findByUserId(Long userId);

    List<Prescription>
    findByStatus(
            PrescriptionStatus status
    );
}
