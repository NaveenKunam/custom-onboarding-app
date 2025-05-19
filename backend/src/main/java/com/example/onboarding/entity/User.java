package com.example.onboarding.entity;

import jakarta.persistence.*;
import java.util.UUID;
import java.time.LocalDate;

@Entity
public class User {
    @Id
    @GeneratedValue
    private UUID id;

    private String email;
    private String passwordHash;
    private String aboutMe;
    private LocalDate birthdate;
    private String addressStreet;
    private String addressCity;
    private String addressState;
    private String addressZip;
    private int lastCompletedStep;

    // Getters and setters...
}
