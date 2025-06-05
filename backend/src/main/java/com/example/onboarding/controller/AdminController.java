package com.example.onboarding.controller;

import com.example.onboarding.entity.OnboardingConfig;
import com.example.onboarding.service.AdminService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/config")
public class AdminController { 
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public List<OnboardingConfig> getAll() {
        return adminService.getAllConfigs();
    }

    @PostMapping
    public void save(@RequestBody List<OnboardingConfig> configs) {
        adminService.saveConfigs(configs);
    }
}
