package com.example.medicineordering.service;


import java.time.LocalDateTime;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.medicineordering.config.JwtService;
import com.example.medicineordering.dto.AuthResponse;
import com.example.medicineordering.dto.LoginRequest;
import com.example.medicineordering.dto.RegisterRequest;
import com.example.medicineordering.entity.Role;
import com.example.medicineordering.entity.User;
import com.example.medicineordering.exception.BadRequestException;
import com.example.medicineordering.exception.UnauthorizedException;
import com.example.medicineordering.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService  {

    private final UserRepository userRepository;

    private final JwtService jwtService;

    private final BCryptPasswordEncoder passwordEncoder =
            new BCryptPasswordEncoder();

   
    public AuthResponse register(RegisterRequest request) {

        if(userRepository.findByEmail(request.getEmail()).isPresent()) {

            throw new BadRequestException(
                    "Email already exists"
            );
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(
                        passwordEncoder.encode(
                                request.getPassword()
                        )
                )
                .phoneNumber(request.getPhoneNumber())
                .address(request.getAddress())
                .role(Role.USER)
                .createdAt(LocalDateTime.now())
                .build();

        userRepository.save(user);

        String token =
                jwtService.generateToken(user.getEmail());

        return AuthResponse.builder()
                .token(token)
                .role(user.getRole().name())
                .email(user.getEmail())
                .name(user.getName())
                .build();
    }

    
    public AuthResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(
                        request.getEmail()
                )
                .orElseThrow(() ->
                        new UnauthorizedException(
                                "Invalid Email"
                        )
                );

        if(
                !passwordEncoder.matches(
                        request.getPassword(),
                        user.getPassword()
                )
        ) {

            throw new UnauthorizedException(
                    "Invalid Password"
            );
        }

        String token =
                jwtService.generateToken(user.getEmail());

        return AuthResponse.builder()
                .token(token)
                .role(user.getRole().name())
                .email(user.getEmail())
                .name(user.getName())
                .build();
    }
}