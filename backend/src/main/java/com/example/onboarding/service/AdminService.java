package com.example.onboarding.service;

import com.example.onboarding.entity.OnboardingConfig;
import com.example.onboarding.repository.OnboardingConfigRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    private final OnboardingConfigRepository configRepository;

    public AdminService(OnboardingConfigRepository configRepository) {
        this.configRepository = configRepository;
    }

    public List<OnboardingConfig> getAllConfigs() {
        return configRepository.findAll();
    }

    public List<OnboardingConfig> getConfigByStep(int step) {
        return configRepository.findByStep(step);
    }

    public void saveConfigs(List<OnboardingConfig> configs) {
        configRepository.saveAll(configs);
    }
}
