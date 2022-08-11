package com.lockzone.service;

import java.sql.Types;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	public ResponseEntity<?> findCustomerIdAuthorized(int id) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String currentUsername = "";
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
		    currentUsername = authentication.getName();
		}
		Master masterCheck = masterRepository.findByUsername(currentUsername);
		if(authentication.getAuthorities().toArray()[0].equals(new SimpleGrantedAuthority("ROLE_USER"))) {
			return new ResponseEntity<>(masterRepository.findById(id).get(), HttpStatus.OK);
		}
		if(masterCheck.getMasterId() == id) {
			return new ResponseEntity<>(masterRepository.findById(id).get(), HttpStatus.OK);
			
		}else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	
	public void saveWebsite(Website website, int masterId) {
		website.setMaster(masterRepository.findById(masterId).get());
		websiteRepository.save(website);
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
        		System.out.println("Testtttyyy");
                UserDetails userDetails = (UserDetails) authentication.getPrincipal();
                userName = userDetails.getUsername();
        }
        if(!userName.equals(null)) {
    		System.out.println("Testttinnnn");
        	return masterRepository.findByUsername(userName);
        }else {
        	return null;
        }
    }
	
	public int getMasterIdByUsername() {
		SecurityContext securityContext = SecurityContextHolder.getContext();
		Authentication authentication = securityContext.getAuthentication();
		String userName = null;
		System.out.println("Testttt");
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
	

	
}
