package com.example.onboarding.entity;

import jakarta.persistence.*;

@Entity
public class OnboardingConfig {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int step;

    private String component;

    // Getters and setters...
}
