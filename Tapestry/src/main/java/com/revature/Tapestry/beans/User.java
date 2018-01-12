package com.revature.Tapestry.beans;

import javax.persistence.*;

@Entity
public class User {
	private Integer userID;
	private String username;
	private String email;
	private String role;
	
	@Id
	@GeneratedValue
	@Column
	public Integer getUserID() {
		return userID;
	}
	public void setUserID(Integer userID) {
		this.userID = userID;
	}
	@Column
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Column
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Column
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}
