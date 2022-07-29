package com.lockzone.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "menu")
public class Master {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "master_id")
	private int masterId;
	
	@Column(name = "name")
	//@NotBlank
	private String name;
	
	@Column(name = "password")
	private String password;

	public Master() {
		super();
	}

	public Master(int masterId, String name, String password) {
		super();
		this.masterId = masterId;
		this.name = name;
		this.password = password;
	}

	public int getMasterId() {
		return masterId;
	}

	public void setMasterId(int masterId) {
		this.masterId = masterId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Master [masterId=" + masterId + ", name=" + name + ", password=" + password + "]";
	}
	
	
}
