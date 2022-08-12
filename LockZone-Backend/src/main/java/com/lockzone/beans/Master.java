package com.lockzone.beans;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "master")
public class Master {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@Column(name = "master_id")
	private int masterId;
	
	@Column(name="username")
	private String username;
	
	@Column(name = "firstName")
	private String firstName;
	
	@Column(name = "lastName")
	private String lastName;
	
	@Column(name = "email")
	private String email;
	
	@OneToMany(mappedBy="master")
	@JsonIgnore
	private Set<Website> websites;

	public Master() {
		super();
	}

	public Master(String username, String firstName, String lastName, String email) {
		super();
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	public int getMasterId() {
		return masterId;
	}

	public void setMasterId(int masterId) {
		this.masterId = masterId;
	}

	public String getUsername() {
		return username;
	}

	public void setUserName(String username) {
		this.username = username;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Set<Website> getWebsites() {
		return websites;
	}

	public void setWebsites(Set<Website> websites) {
		this.websites = websites;
	}

	@Override
	public String toString() {
		return "Master [masterId=" + masterId + ", username=" + username + ", firstName=" + firstName + ", lastName="
				+ lastName + ", email=" + email + "]";
	}

	
}
