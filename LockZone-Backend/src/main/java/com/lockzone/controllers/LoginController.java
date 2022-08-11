package com.lockzone.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;

import com.lockzone.beans.Login;
import com.lockzone.beans.User;
import com.lockzone.data.UserRepository;
import com.lockzone.service.GenericService;

@RestController
@RequestMapping("")
@CrossOrigin("*")
public class LoginController {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	GenericService service;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) throws Exception {
		Authentication auth;
		try {
			auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
			SecurityContextHolder.getContext().setAuthentication(auth);
			user.setPassword(null);
			if(auth.getAuthorities().toArray()[0].toString().equals("ROLE_USER")) {
				return ResponseEntity.ok(new Login(RequestContextHolder.getRequestAttributes().getSessionId(), auth.getAuthorities().toArray()[0].toString(), service.getMasterIdByUsername(user.getUsername())));
			}
			else{
				return ResponseEntity.ok(new Login(RequestContextHolder.getRequestAttributes().getSessionId(), auth.getAuthorities().toArray()[0].toString()));
			}
		}catch (BadCredentialsException e) {
			return new ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST);
		}
	}
	
}
