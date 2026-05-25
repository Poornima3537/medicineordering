package com.example.medicineordering.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthResponse {

    private String token;

    private String role;

    private String email;

    private String name;

    private String address;
}
