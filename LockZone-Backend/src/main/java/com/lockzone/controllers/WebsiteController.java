package com.lockzone.controllers;

import java.util.List;

import javax.validation.Valid;

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

	@GetMapping
	public List<Website> getAllWebsites(){
		return websiteRepository.findAll();
	}
	@GetMapping("/find") // localhost:8080/websites?q=danbloom
	public List<Website> getWebsites(@RequestParam(name = "q", required = true) String name) {
		return websiteRepository.findByMasterUsername(name);
	}
	@GetMapping("/like")
	public List<Website> findUrlNameLike(@RequestParam String urlname){
		return websiteRepository.findByurlNameLike("%" + urlname+  "%");
	}

	@GetMapping("/{id}")
	public ResponseEntity<Website> findById(@PathVariable int id) {
		return ResponseEntity.ok(websiteRepository.findById(id).orElse(new Website()));
	}

	@GetMapping("/masterId={id}") //localhost:8080/websites/masterid=4
	public List<Website> findByMaster(@PathVariable int id){
		//return service.getMasterWebsites(id);
		return websiteRepository.findByMasterId(id);
	}
	
	@PostMapping //localhost:8080/websites
	public Website save(@Valid @RequestBody Website website) {
		return service.saveWebsite(website);
	}
	
	/** something like this 
	"urlName": "https://youtuber.com",
    "master": {
            "masterId": 1
    }
	*/
	@PutMapping("/{id}") //localhost:8080/websites/10
	@Transactional // Done through responseBody
	public Website update(@RequestBody Website website, @PathVariable int id) {
		if(websiteRepository.existsById(id)) {
			website.setWebsiteId(id);
			return websiteRepository.save(website);
		}else {
			throw new IllegalArgumentException("Illegal ID");
		}
	}
	
	@DeleteMapping("/{id}") //localhost:8080/websites/10
	public ResponseEntity<Void> delete(@PathVariable int id){
		websiteRepository.deleteById(id);
		return ResponseEntity.status(204).build();
	}

	
}
