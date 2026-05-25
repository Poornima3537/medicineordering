package com.example.medicineordering;

import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.medicineordering.entity.Role;
import com.example.medicineordering.entity.User;
import com.example.medicineordering.repository.UserRepository;

@SpringBootApplication
public class MedicineorderingApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedicineorderingApplication.class, args);
	}

	@Bean
	CommandLineRunner seedAdmin(UserRepository userRepository) {

		return args -> {

			String adminEmail =
					"admin@medicine.com";

			if (userRepository.findByEmail(adminEmail).isPresent()) {
				return;
			}

			BCryptPasswordEncoder passwordEncoder =
					new BCryptPasswordEncoder();

			User admin =
					User.builder()
							.name("Admin")
							.email(adminEmail)
							.password(
									passwordEncoder.encode(
											"Admin@123"
									)
							)
							.phoneNumber("9999999999")
							.address("Admin Office")
							.role(Role.ADMIN)
							.createdAt(LocalDateTime.now())
							.build();

			userRepository.save(admin);
		};
	}
}
