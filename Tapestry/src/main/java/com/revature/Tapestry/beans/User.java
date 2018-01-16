package com.revature.Tapestry.beans;

import javax.persistence.*;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
@Table(name = "USER")
public class User {
	private Integer userID;
	private String username;
	private String email;
	private String password;
	public User () {}
	public User(Integer userID, String username, String email, String role, String password) {
		super();
		this.userID = userID;
		this.username = username;
		this.email = email;
		this.role = role;
		this.setPassword(password);
	}
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
	public void setPassword(String password) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(password);
		this.password = hashedPassword;
	}
	@Column
	private String getPassword()
	{
		return password;
	}
	public boolean isCorrectPassword(String passwordToCheck) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		return passwordEncoder.matches(passwordToCheck, this.getPassword());
	}
}
