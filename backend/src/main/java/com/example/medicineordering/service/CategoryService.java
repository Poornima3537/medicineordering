package com.example.medicineordering.service;

import com.example.medicineordering.dto.CategoryRequest;
import com.example.medicineordering.dto.CategoryResponse;

import java.util.List;

public interface CategoryService {

    CategoryResponse addCategory(CategoryRequest request);

    List<CategoryResponse> getAllCategories();
}