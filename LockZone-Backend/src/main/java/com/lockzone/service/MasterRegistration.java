package com.lockzone.service;

import java.sql.Types;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MasterRegistration {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	public void register(String masterUsername, String masterPassword) {
		String hash = passwordEncoder.encode(masterPassword);
		String userSql = "insert into users values(?, ?, true)";
		String authSql = "insert into authorities values(?, ROLE_USER)";
		jdbcTemplate.update(userSql, new String[] {masterUsername, hash}, new int[] {Types.VARCHAR, Types.VARCHAR});
		jdbcTemplate.update(authSql, new String[] {masterUsername}, new int[] {Types.VARCHAR});
	}
}
