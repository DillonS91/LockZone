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
@Table(name ="website")
public class Website {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "website_id")
	private int websiteId;
	
	@Column(name = "urlname")
	private String urlName;
	
	@ManyToOne
	@JoinColumn(name = "master_id")
	private Master master;

	public Website() {
		super();
	}

	public Website(int websiteId, String urlName, Master master) {
		super();
		this.websiteId = websiteId;
		this.urlName = urlName;
		this.master = master;
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
