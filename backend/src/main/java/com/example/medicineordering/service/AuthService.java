package com.example.medicineordering.service;

import com.example.medicineordering.dto.LoginRequest;
import com.example.medicineordering.dto.RegisterRequest;
import com.pharmacy.dto.response.AuthResponse;

public interface AuthService {

    AuthResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}