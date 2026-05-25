package com.example.medicineordering.controller;

import com.example.medicineordering.dto.LoginRequest;
import com.example.medicineordering.dto.RegisterRequest;
import com.example.medicineordering.dto.AuthResponse;
import com.example.medicineordering.entity.User;
import com.example.medicineordering.service.AuthService;
import com.example.medicineordering.service.CurrentUserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    private final CurrentUserService currentUserService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @GetMapping("/profile")
    public ResponseEntity<AuthResponse> getProfile(
            HttpServletRequest request
    ) {

        User user =
                currentUserService.getCurrentUser(request);

        return ResponseEntity.ok(
                authService.getProfile(user.getId())
        );
    }
}
