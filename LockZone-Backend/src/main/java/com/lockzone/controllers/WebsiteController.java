package com.lockzone.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lockzone.beans.Website;
import com.lockzone.data.WebsiteRepository;

@RestController
@RequestMapping("/websites")
public class WebsiteController {
	
	@Autowired
	private WebsiteRepository websiteRepository;
	
	@GetMapping //localhost:8080/accounts?page0&size=1
	public List<Website> getWebsites(@RequestParam(name="q", required = true) String name){
		return websiteRepository.findByMasterName(name);
	}
}
