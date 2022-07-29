package com.lockzone.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.lockzone.beans.Master;
import com.lockzone.data.MasterRepository;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class MasterController {

	@Autowired
	private MasterRepository repository;
	
	@GetMapping
	@ResponseBody
	public Object findAll(@RequestParam(required = false) String name) {
		if (name != null) {
			return repository.findByNameLike("%" + name + "%");
		} else {
			return repository.findAll();
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Master> findById(@PathVariable int id) {
		return ResponseEntity.ok(repository.findById(id).orElse(new Master()));
	}
	
	@PostMapping
	public ResponseEntity<Master> create (@Valid @RequestBody Master master){
		return new ResponseEntity<>(repository.save(master), HttpStatus.CREATED);
	}
	
	// Update
	
	
	// Delete
}
