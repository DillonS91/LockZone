package com.lockzone.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

	@GetMapping // localhost:8080/websites?q=dan
	public List<Website> getWebsites(@RequestParam(name = "q", required = true) String name) {
		return websiteRepository.findByMasterName(name);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Website> findById(@PathVariable int id) {
		return ResponseEntity.ok(websiteRepository.findById(id).orElse(new Website()));
	}

	@PostMapping 
	@Transactional // localhost:8080/websites?q=1 and insert json urlname (maybe make masterid a body as well?)
	public void saveWebsite(@RequestBody Website website, @RequestParam(name = "q", required = true) int masterId) {
		service.saveWebsite(website, masterId);
	}
	
	/** something like this 
	"urlName": "https://youtuber.com",
    "master": {
            "masterId": 1
    }
	*/
	@PutMapping("/{id}")
	@Transactional // Done through responseBody
	public Website update(@RequestBody Website website, @PathVariable int id) {
		if(websiteRepository.existsById(id)) {
			website.setWebsiteId(id);
			return websiteRepository.save(website);
		}else {
			throw new IllegalArgumentException("Illegal ID");
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable int id){
		websiteRepository.deleteById(id);
		return ResponseEntity.noContent().header("Custom-header", "dead").build();
	}

}
