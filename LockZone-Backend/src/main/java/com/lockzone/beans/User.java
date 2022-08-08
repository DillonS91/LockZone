package com.lockzone.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@Column(name="username")
	private String username;
	
	@OneToOne()
	@JoinColumn(name="masterId")
	private Master master;
	
	@Column(name="password")
	private String password;
	
	private boolean enabled;

	public User() {
		super();
	}

	public User(String username, Master master, String password) {
		super();
		this.username = username;
		this.master = master;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Master getMaster() {
		return master;
	}

	public void setMaster(Master master) {
		this.master = master;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	@Override
	public String toString() {
		return "User [username=" + username + ", master=" + master + ", password=" + password + "]";
	}
	
	
	
}
