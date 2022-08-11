package com.lockzone.controllers;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.lockzone.beans.Master;
import com.lockzone.data.MasterRepository;
import com.lockzone.service.GenericService;

@RestController
@RequestMapping("/master")
@CrossOrigin(origins = "*")
public class MasterController {

	@Autowired
	private MasterRepository repository; 
	
	@Autowired
	private GenericService service;
	
	@GetMapping
	@ResponseBody
	public Object findAll(@RequestParam(required = false) String username) {
		if (username != null) {
			return repository.findByUsernameLike("%" + username + "%");
		} else {
			return repository.findAll();
		}
	}
	
	@GetMapping("/?username={username}")
	public Master getByName(@PathVariable String username) {
		return repository.findByUsername(username);
	}
	
	@GetMapping("/{id}") 
	public ResponseEntity<Master> findById(@PathVariable int id) {
		return ResponseEntity.ok(repository.findById(id).orElse(new Master()));
	}
	
	@PostMapping
	@Transactional
	public Master save (@Valid @RequestBody Master master){
		return repository.save(master);
	}
	
	// Update
	@PutMapping("/{id}") // PUT /master/56
	public Master update(@RequestBody Master master, @PathVariable int id) {
		if (repository.existsById(id)) {
			master.setMasterId(id); 
			return repository.save(master);
		} else {
			throw new IllegalArgumentException("ID doesn't exist");
		}
	}
	
	// Delete
	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}
	
}
