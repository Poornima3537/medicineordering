package com.example.medicineordering.repository;

import com.example.medicineordering.entity.Dosage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DosageRepository extends JpaRepository<Dosage, Long> {
}