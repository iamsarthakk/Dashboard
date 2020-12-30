package com.p1.entity;

public class User {
	
    private long id;
    private String name;
    private String email;
    
    public User() {
    
		this.name = "";
		this.email = "";
    }
	public User(String name, String email) {
		
		this.name = name;
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public String getEmail() {
		return email;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + "]";
	}
}
