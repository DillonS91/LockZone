package com.lockzone.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lockzone.beans.Accounts;
import com.lockzone.data.AccountsRepository;
import com.lockzone.service.AESService;
import com.lockzone.service.GenericService;

@RestController
@RequestMapping("/accounts")
@CrossOrigin(origins = "*")
public class AccountsController {
	
	@Autowired
	private AESService aesService;
	
	@Autowired
	private AccountsRepository accountsRepository;
	
	@Autowired 
	private GenericService service;
		
//	@GetMapping //localhost:8080/accounts?page0
//	public List<Accounts> findAll(@RequestParam(defaultValue="0") int page){
//		return service.findAllAccountsPaged(page);
//	}
	@GetMapping("/websiteId={id}") //localhost:8080/websites/masterid=4
	public List<Accounts> findByMaster(@PathVariable int id){
		List<Accounts> accounts = accountsRepository.findByWebsiteId(id);
		try {
			aesService.initFromStrings("PTgBIqwx2IU9VZIOhAsa35w22q41brIpJHTkLFU4aFc=", "fHcn9YBZWu89tA==");
			for (Accounts acc: accounts) {
				acc.setAccpassword(aesService.decrypt(acc.getAccpassword()));
			}
		} catch ( Exception e ) {
			e.printStackTrace();
		}
		return accounts;
//		return accountsRepository.findByWebsiteId(id);
	}
	
//	@GetMapping("/websiteId={id}")
//	public int getAccountsByWebsiteWebsiteId(@PathVariable int id) {
//		Website web = accountsRepository.getReferenceById(id);
//		return web.getAccounts().getAccountId();
//	}
	
	@GetMapping("/master/{master_id}/{page}") //localhost:8080/accounts/master/1/0 PAGENATION for accounts
	public List<Accounts> pageableAccountsByMaster(@PathVariable int master_id,@PathVariable int page){
		List<Accounts> accounts = service.findAccountsByMaster(master_id, page);
		try {
			aesService.initFromStrings("PTgBIqwx2IU9VZIOhAsa35w22q41brIpJHTkLFU4aFc=", "fHcn9YBZWu89tA==");
			for (Accounts acc: accounts) {
				acc.setAccpassword(aesService.decrypt(acc.getAccpassword()));
			}
		} catch ( Exception e ) {
			e.printStackTrace();
		}
		return accounts;
//		return service.findAccountsByMaster(master_id, page);
	}
	
	
//	{ POST RESPONSE BODY
//	    "accnames": "SeverusBlack",
//	    "accpassword": "Harrypotter",
//	    "website": {
//	            "websiteId": 1,
//	            "master": {
//	                "masterId": 1
//	            }
//	    }
//	}
	@PostMapping
	public Accounts create(@Valid @RequestBody Accounts account) {
//		try {
//			aesService.initFromStrings("PTgBIqwx2IU9VZIOhAsa35w22q41brIpJHTkLFU4aFc=", "fHcn9YBZWu89tA==");
//			account.setAccpassword(aesService.encrypt(account.getAccpassword()));
//		} catch ( Exception e ) {
//			e.printStackTrace();
//		}
		return service.saveAccounts(account);
	}
	
	//Same RequestBody as Post
	@PutMapping("/{id}") //localhost:8080/accounts/1
	public Accounts updateAccounts(@RequestBody Accounts account, @PathVariable int id) {
//		try {
//			aesService.initFromStrings("PTgBIqwx2IU9VZIOhAsa35w22q41brIpJHTkLFU4aFc=", "fHcn9YBZWu89tA==");
//			account.setAccpassword(aesService.encrypt(account.getAccpassword()));
//		} catch ( Exception e ) {
//			e.printStackTrace();
//		}
		return service.updateAccounts(id, account);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable int id){
		return service.deleteAccount(id);
	}
}



































