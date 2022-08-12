package com.lockzone.beans;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name ="website")
public class Website {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@Column(name = "website_id")
	private int websiteId;
	
	@Column(name = "urlname")
	private String urlName;
	
	@ManyToOne
	@JoinColumn(name = "master_id")
	private Master master;
	
	@OneToMany(mappedBy = "website")
	@JsonIgnore
	private Set<Accounts> accounts;

	public Website() {
		super();
	}

	public Website(int websiteId, String urlName, Master master) {
		super();
		this.websiteId = websiteId;
		this.urlName = urlName;
		this.master = master;
	}

	public Set<Accounts> getAccounts() {
		return accounts;
	}

	public void setAccounts(Set<Accounts> accounts) {
		this.accounts = accounts;
	}

	public int getWebsiteId() {
		return websiteId;
	}

	public void setWebsiteId(int websiteId) {
		this.websiteId = websiteId;
	}

	public String getUrlName() {
		return urlName;
	}

	public void setUrlName(String urlName) {
		this.urlName = urlName;
	}

	public Master getMaster() {
		return master;
	}

	public void setMaster(Master master) {
		this.master = master;
	}

	@Override
	public String toString() {
		return "Website [websiteId=" + websiteId + ", urlName=" + urlName + "]";
	}
	
	
}
