package com.example.medicineordering.service;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.medicineordering.dto.CategoryRequest;
import com.example.medicineordering.dto.CategoryResponse;
import com.example.medicineordering.entity.Category;
import com.example.medicineordering.repository.CategoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryService{

    private final CategoryRepository categoryRepository;

    
    public CategoryResponse addCategory(
            CategoryRequest request
    ) {

        Category category = Category.builder()
                .name(request.getName())
                .build();

        Category savedCategory =
                categoryRepository.save(category);

        return CategoryResponse.builder()
                .id(savedCategory.getId())
                .name(savedCategory.getName())
                .build();
    }

    
    public List<CategoryResponse> getAllCategories() {

        return categoryRepository.findAll()
                .stream()
                .map(category ->
                        CategoryResponse.builder()
                                .id(category.getId())
                                .name(category.getName())
                                .build()
                )
                .collect(Collectors.toList());
    }

    public void deleteCategory(Long id) {

        categoryRepository.deleteById(id);
    }
}
