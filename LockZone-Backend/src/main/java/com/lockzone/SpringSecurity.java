package com.lockzone;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.lockzone.filters.FilterChainConfig;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)  // role-based access control (RBAC) to methods.. not just URL
public class SpringSecurity extends WebSecurityConfigurerAdapter {

	@Autowired // Spring Data JPA should have a datasource already
	private DataSource datasource;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	@Autowired
	protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().dataSource(datasource).passwordEncoder(passwordEncoder);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().addFilterBefore(new FilterChainConfig(), UsernamePasswordAuthenticationFilter.class);
		http.httpBasic(); 
		
		http.authorizeRequests().mvcMatchers("/**").permitAll();
		http.authorizeRequests().mvcMatchers("/register").permitAll();
		http.authorizeRequests().mvcMatchers("/logout").permitAll();
		http.authorizeRequests().mvcMatchers("/master/**").hasAnyRole("USER");
		http.authorizeRequests().mvcMatchers("/websites/**").hasAnyRole("USER");
		http.authorizeRequests().mvcMatchers("/accounts/**").hasAnyRole("USER");
		http.logout().deleteCookies("custom-cookie").invalidateHttpSession(false); // POST /logout	
	}
	
}