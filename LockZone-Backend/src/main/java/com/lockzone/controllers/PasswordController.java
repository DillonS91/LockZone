package com.lockzone.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lockzone.service.PasswordService;

@RestController
@RequestMapping("/password")
@CrossOrigin(origins = "*")
public class PasswordController {
	
	
	private static String password = "This is a test";
	
	// This works and returns a randomized string, but not as a json object
	@GetMapping("/randomized")
	public String returnRandomPassword() {
		return PasswordService.randomizedPasswordGenerator();
	}
	
	// work in progress
	@PostMapping("/shuffle/{seedString}")
	public void getSeedStringShuffle() {
		
	}
	
	// This works and returns a shuffled and randomize string, but not as a json object
	@GetMapping("/shuffle")
	public String returnShuffledPassword() {
		return PasswordService.passwordShuffler(password);
	}
	
	// work in progress
	@PostMapping("/special/{SeedString}")
	public void getSeedStringSpecial() {
		
	}
	
	// This works and returns a l337 password, but not as a json object
	@GetMapping("/special")
	public String returnSpecialPassword() {
		return PasswordService.l33tPasswords(password);
	}
	
}
