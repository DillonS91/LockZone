package com.lockzone.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lockzone.dto.MasterUserDTO;
import com.lockzone.service.MasterRegistration;

@RestController
public class RegistrationMasterController {
	
	@Autowired
	private MasterRegistration service;
	
	@PostMapping(value = "/register")
	public ResponseEntity<Void> register(@RequestBody MasterUserDTO dto){
		service.register(dto.getUsername(), dto.getPassword());
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping("/login-master")
	public ResponseEntity<Void> login(){
		return ResponseEntity.ok().build();
	}
	
}
