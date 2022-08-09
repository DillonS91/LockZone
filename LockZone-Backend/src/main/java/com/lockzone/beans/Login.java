package com.lockzone.beans;

public class Login {
	private String Authentication;
	private String Authority;
	private Master master;
	
	public Login(String authentication, String authority, Master master) {
		super();
		this.Authentication = authentication;
		this.Authority = authority;
		this.master = master;
	}

	public Login(String authentication, String authority) {
		super();
		Authentication = authentication;
		Authority = authority;
	}

	public Login() {
		super();
	}

	public String getAuthentication() {
		return Authentication;
	}

	public void setAuthentication(String authentication) {
		Authentication = authentication;
	}

	public String getAuthority() {
		return Authority;
	}

	public void setAuthority(String authority) {
		Authority = authority;
	}

	public Master getMaster() {
		return master;
	}

	public void setMaster(Master master) {
		this.master = master;
	}
	
	
}
