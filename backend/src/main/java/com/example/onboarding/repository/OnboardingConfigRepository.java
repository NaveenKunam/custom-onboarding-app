package com.example.onboarding.repository;

import com.example.onboarding.entity.OnboardingConfig;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OnboardingConfigRepository extends JpaRepository<OnboardingConfig, Long> {
    List<OnboardingConfig> findByStep(int step);
}
