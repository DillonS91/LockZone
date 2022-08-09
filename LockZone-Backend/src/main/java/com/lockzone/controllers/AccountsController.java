package com.lockzone.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lockzone.beans.Accounts;
import com.lockzone.service.AccountsService;

@RestController
public class AccountsController {

	@Autowired 
	private AccountsService service;
	
	@GetMapping("/accounts/count") //returns count
	public long count() {
		return service.count();
	}
	
	@GetMapping("/accounts") //localhost:8080/accounts?page0&size=20
	public List<Accounts> findAll(@RequestParam(defaultValue="0") int page, @RequestParam int size){
		return service.findAllAccountsPaged(page);
	}
	
	@GetMapping("/accounts/master/{master_id}") //localhost:8080/accounts?page0&size=20
	public List<Accounts> pageableAccountsByMaster(@PathVariable int master_id, int page){
		return service.findAccountsByMaster(master_id, page);
	}
}
