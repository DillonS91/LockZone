package com.lockzone;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
//@EnableGlobalMethodSecurity  // role-based access control (RBAC) to methods.. not just URL
public class SpringSecurity extends WebSecurityConfigurerAdapter {

	@Autowired // Spring Data JPA should have a datasource already
	private DataSource datasource;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().dataSource(datasource).passwordEncoder(passwordEncoder);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().httpBasic(); // not-prod
		http.authorizeRequests().mvcMatchers("/login-master").hasAnyRole("USER");
		http.authorizeRequests().mvcMatchers("/websites/**").hasAnyRole("USER");
		http.authorizeRequests().mvcMatchers("/**").permitAll();
		http.logout().deleteCookies("custom-cookie").invalidateHttpSession(false); // POST /logout
		
	}
	
}