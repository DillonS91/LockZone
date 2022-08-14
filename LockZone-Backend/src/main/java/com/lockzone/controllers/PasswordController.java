package com.lockzone.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lockzone.service.PasswordService;

@RestController
@RequestMapping("/password")
@CrossOrigin(origins = "*")
public class PasswordController {
	
	private RandomPWDTO rpw = new RandomPWDTO();
	private ShufflePWDTO spw = new ShufflePWDTO();
	private SpecialPWDTO lpw = new SpecialPWDTO();
	
	// This receives a string from a user on the frontend as a path variable and sets the password field of the PasswordHolderDTO object
	@PostMapping("/{password}")
	public void getSeedStringShuffle(@PathVariable String password) {
		rpw.setRandomizedPassword(password);
		spw.setShuffledPassword(password);
		lpw.setSpecialPassword(password);
	}
	
	// This will return a randomize string 15 characters in length to the frontend
	@GetMapping("/randomized")
	public RandomPWDTO returnRandomPassword() {
		rpw.setRandomizedPassword(PasswordService.randomizedPasswordGenerator());
		return rpw;
	}
	
	// This will return the string that the user provided from the frontend shuffled and mutated, the only similarity to the original is the number of non white-space characters
	@GetMapping("/shuffle")
	public ShufflePWDTO returnShuffledPassword() {
		spw.setShuffledPassword(PasswordService.passwordShuffler(spw.getShuffledPassword()));
		return spw;
	}
	
	// This will return the string that the user provided from the frontend with certain character replaced with other characters that appear similar
	@GetMapping("/special")
	public SpecialPWDTO returnSpecialPassword() {
		lpw.setSpecialPassword(PasswordService.l33tPasswords(lpw.getSpecialPassword()));
		return lpw;
	}
	
	// Data transfer object: This will handle strings given by the user from the frontend and pass the new password back to the backend 
	class RandomPWDTO{
		private String randomizedPassword = "";
		public RandomPWDTO() {
			super();
		}
		public RandomPWDTO(String randomizedPassword) {
			super();
			this.randomizedPassword = randomizedPassword;
		}
		public String getRandomizedPassword() {
			return randomizedPassword;
		}
		public void setRandomizedPassword(String randomizedPassword) {
			this.randomizedPassword = randomizedPassword;
		}
		
	}
	
	class ShufflePWDTO{
		private String shuffledPassword = "";
		public ShufflePWDTO() {
			super();
		}
		public ShufflePWDTO(String shuffledPassword) {
			super();
			this.shuffledPassword = shuffledPassword;
		}
		public String getShuffledPassword() {
			return shuffledPassword;
		}
		public void setShuffledPassword(String shuffledPassword) {
			this.shuffledPassword = shuffledPassword;
		}	
	}
	
	class SpecialPWDTO{
		private String specialPassword = "";
		public SpecialPWDTO() {
			super();
		}
		public SpecialPWDTO(String specialPassword) {
			super();
			this.specialPassword = specialPassword;
		}
		public String getSpecialPassword() {
			return specialPassword;
		}
		public void setSpecialPassword(String specialPassword) {
			this.specialPassword = specialPassword;
		}
	}
	
}

