package com.example.medicineordering.service;

import com.example.medicineordering.config.JwtService;
import com.example.medicineordering.entity.User;
import com.example.medicineordering.exception.UnauthorizedException;
import com.example.medicineordering.repository.UserRepository;

import jakarta.servlet.http.HttpServletRequest;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CurrentUserService {

    private final JwtService jwtService;

    private final UserRepository userRepository;

    public User getCurrentUser(
            HttpServletRequest request
    ) {

        String authorizationHeader =
                request.getHeader("Authorization");

        if (
                authorizationHeader == null
                || !authorizationHeader.startsWith("Bearer ")
        ) {

            throw new UnauthorizedException(
                    "Login Required"
            );
        }

        String token =
                authorizationHeader.substring(7);

        String email =
                jwtService.extractEmail(token);

        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UnauthorizedException(
                                "User Not Found"
                        )
                );
    }

    public Long getCurrentUserId(
            HttpServletRequest request
    ) {

        return getCurrentUser(request)
                .getId();
    }
}
