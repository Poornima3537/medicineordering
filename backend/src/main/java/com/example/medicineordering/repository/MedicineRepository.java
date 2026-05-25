package com.example.medicineordering.repository;


import com.example.medicineordering.entity.Medicine;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineRepository
        extends JpaRepository<Medicine, Long> {
}
