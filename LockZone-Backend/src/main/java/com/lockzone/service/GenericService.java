package com.lockzone.service;

import java.sql.Types;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.lockzone.beans.Accounts;
import com.lockzone.beans.Master;
import com.lockzone.beans.User;
import com.lockzone.beans.Website;
import com.lockzone.data.AccountsRepository;
import com.lockzone.data.MasterRepository;
import com.lockzone.data.UserRepository;
import com.lockzone.data.WebsiteRepository;

@Service
public class GenericService {
	@Autowired
	private AccountsRepository accountsRepository;
	@Autowired
	private MasterRepository masterRepository;
	@Autowired
	private WebsiteRepository websiteRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	private static final int DEFAULT_PAGE_SIZE = 10;
	
	public void register(User user) {
		String hash = passwordEncoder.encode(user.getPassword());
		String username = user.getUsername();
		user.setMaster(masterRepository.save(user.getMaster()));
		int masterId = user.getMaster().getMasterId();
		
		String userSql = "insert into users values(?,?,true,?)";
		String authSql = "insert into authorities values(?, 'ROLE_USER')";
		jdbcTemplate.update(userSql, new Object[] {username, hash, masterId}, new int[] {Types.VARCHAR, Types.VARCHAR, Types.INTEGER});
		jdbcTemplate.update(authSql, new String[] {username}, new int[] {Types.VARCHAR});
	}
	
	public ResponseEntity<?> findCustomerIdAuthorized(int masterId) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String currentUsername = "";
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
		    currentUsername = authentication.getName();
		}
		Master masterCheck = masterRepository.findByUsername(currentUsername);
		if(authentication.getAuthorities().toArray()[0].equals(new SimpleGrantedAuthority("ROLE_USER"))) {
			return new ResponseEntity<>(masterRepository.findById(masterId).get(), HttpStatus.OK);
		}
		if(masterCheck.getMasterId() == masterId) {
			return new ResponseEntity<>(masterRepository.findById(masterId).get(), HttpStatus.OK);
			
		}else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	
	public ResponseEntity<?> getMasterWebsites(int masterId){
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String username ="";
		if(!(auth instanceof AnonymousAuthenticationToken)) {
			username = auth.getName();
		}
		Master masterCheck = masterRepository.findByUsername(username);
		if(auth.getAuthorities().toArray()[0].equals(new SimpleGrantedAuthority("ROLE_USER"))) {
			return new ResponseEntity<>(websiteRepository.findById(masterId).get(), HttpStatus.OK);
		}
		if(masterCheck.getMasterId()==masterId) {
			return new ResponseEntity<>(websiteRepository.findById(masterId), HttpStatus.OK);
		}else {
			return new ResponseEntity<>("Unauthorized Attempt to access", HttpStatus.UNAUTHORIZED);
		}
		
	}
	
	public Website saveWebsite(Website website) {
		//website.setMaster(masterRepository.findById(masterId).get());
		//website.setMaster(masterRepository.findByUsername(masterUsername));
		return websiteRepository.save(website);
	}
	
	/*
	 * public Website updateWebsite(Website website, int websiteId) { website=
	 * websiteRepository.findById(websiteId).get(); return
	 * websiteRepository.save(website); }
	 */
	
	
	public Master getMasterIdByUsername(String username) {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        String userName = null;
        if (authentication != null) {
                UserDetails userDetails = (UserDetails) authentication.getPrincipal();
                userName = userDetails.getUsername();
        }
        if(!userName.equals(null)) {
        	return masterRepository.findByUsername(userName);
        }else {
        	return null;
        }
    }
	
	public int getMasterIdByUsername() {
		SecurityContext securityContext = SecurityContextHolder.getContext();
		Authentication authentication = securityContext.getAuthentication();
		String userName = null;
		if(authentication != null) {
			UserDetails userDetails = (UserDetails)authentication.getPrincipal();
			userName = userDetails.getUsername();
		}
		if(!userName.equals(null)) {
			return (int) masterRepository.findByUsername(userName).getMasterId();
		}else {
			return 0;
		}
	}
	
	
//	public long count() {
//		return accountsRepository.count();
//	}
	
	public List<Accounts> findAllAccountsPaged(int page) {
		return accountsRepository.findAll(PageRequest.of(page, DEFAULT_PAGE_SIZE)).toList();
	}
	
	public List<Accounts> findAccountsByMaster(int masterId, int page){
		return accountsRepository.findByWebsiteMasterMasterId(masterId, PageRequest.of(page, DEFAULT_PAGE_SIZE)).toList();
	}
	
	public Accounts saveAccounts(Accounts accounts) {
		return accountsRepository.save(accounts);
	}
	
	public Accounts updateAccounts(int id, Accounts account) {
		if(accountsRepository.existsById(id)) {
			account.setAccountId(id);
			return accountsRepository.save(account);
		}else {
			throw new IllegalArgumentException("Id doesn't exist");
		}
	}
	
	@Transactional
	public ResponseEntity<Void> deleteAccount(int id){
		accountsRepository.deleteById(id);
		return ResponseEntity.status(204).build();
	}
	
	@Transactional
	public ResponseEntity<Void> deleteMaster(int id) {
		masterRepository.deleteById(id);
		return ResponseEntity.status(204).build();
	}
	
}
