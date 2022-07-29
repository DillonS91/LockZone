package com.lockzone.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Accounts {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "account_id")
	private int accountId;
	
	@Column(name= "accnames")
	private String accnames;
	
	@Column(name = "accpassword")
	private String accpassword;
	
	@ManyToOne
	@JoinColumn(name = "website_id")
	private Website website;

	public Accounts() {
		super();
	}

	public Accounts(int accountId, String accnames, String accpassword, Website website) {
		super();
		this.accountId = accountId;
		this.accnames = accnames;
		this.accpassword = accpassword;
		this.website = website;
	}

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public String getAccnames() {
		return accnames;
	}

	public void setAccnames(String accnames) {
		this.accnames = accnames;
	}

	public String getAccpassword() {
		return accpassword;
	}

	public void setAccpassword(String accpassword) {
		this.accpassword = accpassword;
	}

	public Website getWebsite() {
		return website;
	}

	public void setWebsite(Website website) {
		this.website = website;
	}

	@Override
	public String toString() {
		return "Accounts [accountId=" + accountId + ", accnames=" + accnames + ", accpassword=" + accpassword + "]";
	}
	
	
	
	
}
