package com.lockzone.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lockzone.beans.Website;
import com.lockzone.data.WebsiteRepository;
import com.lockzone.service.GenericService;

@RestController
@RequestMapping("/websites")
@CrossOrigin(origins = "*")
public class WebsiteController {
	
	@Autowired
	private WebsiteRepository websiteRepository;
	
	@Autowired
	private GenericService service;
	
	@GetMapping //localhost:8080/websites?q=dan
	public List<Website> getWebsites(@RequestParam(name="q", required = true) String name){
		return websiteRepository.findByMasterName(name);
	}
	
	@PostMapping //something like this maybe?
	@Transactional //localhost:8080/websites?masterId=1&urlname=https://twitter.com
	public void saveWebsite(@RequestBody Website website, @RequestParam int masterId){
		service.saveWebsite(website, masterId);
	}
}
