package com.example.admin;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Admin {
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private int id;
	  
      @Column(name="admin_name")
	  private String name ;
      
      @Column(name="admin_password")
	  private String  password ;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	    
	
	  
	  
	
	  
	  
}
