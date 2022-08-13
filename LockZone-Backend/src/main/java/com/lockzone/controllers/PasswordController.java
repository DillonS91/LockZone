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
	
	private PasswordHolderDTO pwh = new PasswordHolderDTO();
	
	// This receives a string from a user on the frontend as a path variable and sets the password field of the PasswordHolderDTO object
	@PostMapping("/{password}")
	public void getSeedStringShuffle(@PathVariable String password) {
		pwh.setPassword(password);
	}
	
	// This will return a randomize string 15 characters in length to the frontend
	@GetMapping("/randomized")
	public PasswordHolderDTO returnRandomPassword() {
		pwh.setPassword(PasswordService.randomizedPasswordGenerator());
		return pwh;
	}
	
	// This will return the string that the user provided from the frontend shuffled and mutated, the only similarity to the original is the number of non white-space characters
	@GetMapping("/shuffle")
	public PasswordHolderDTO returnShuffledPassword() {
		pwh.setPassword(PasswordService.passwordShuffler(pwh.getPassword()));
		return pwh;
	}
	
	// This will return the string that the user provided from the frontend with certain character replaced with other characters that appear similar
	@GetMapping("/special")
	public PasswordHolderDTO returnSpecialPassword() {
		pwh.setPassword(PasswordService.l33tPasswords(pwh.getPassword()));
		return pwh;
	}
	
	// Data transfer object: This will handle strings given by the user from the frontend and pass the new password back to the backend 
	class PasswordHolderDTO{
		private String password;

		public PasswordHolderDTO() {
			super();
		}

		public PasswordHolderDTO(String password) {
			super();
			this.password = password;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		@Override
		public String toString() {
			return "PasswordHolder [password=" + password + "]";
		}
		
	}
	
}

