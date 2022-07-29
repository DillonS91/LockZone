package com.lockzone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.lockzone.beans.Accounts;
import com.lockzone.data.AccountsRepository;

@Service
public class AccountsService {
	private static final int DEFAULT_PAGE_SIZE=10;
	
	@Autowired
	private AccountsRepository repository;
	
	public Accounts save(Accounts accounts) {
		return repository.save(accounts);
	}
	
	public List<Accounts> findAccountsByMaster(int master_id, int page){
		return repository.findByWebsiteMasterId(master_id, PageRequest.of(page, DEFAULT_PAGE_SIZE)).toList();
	}
	
	public long count() {
		return repository.count();
	}
	
	public List<Accounts> findAllAccountsPaged(int page) {
		return repository.findAllAccountsPaged(PageRequest.of(page, DEFAULT_PAGE_SIZE)).toList();
	}
}
