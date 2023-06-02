package com.piyush.comp.ang_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.piyush.comp.ang_shop.model.User;
import com.piyush.comp.ang_shop.service.RegistrationService;

@RestController
public class RegistrationController {

	@Autowired
	private RegistrationService service;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins="http://localhost:4200")
	public User registerUser(@RequestBody User user) throws Exception
    {
		String tempemail = user.getEmailId();
		if(tempemail!=null && !"".equals(tempemail))    
		{ 
			User userobj= service.fetchUserByEmailId(tempemail);
			if(userobj!=null)
			{
				throw new Exception("User With This "+tempemail+" is already present");
			}
		}
		User userObj=null;
	userObj=service.saveUser(user);
	return userObj;
	
    }
	
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public User loginUser(@RequestBody User user) throws Exception
	{
	 String tempemail = user.getEmailId();
	 String temppass = user.getPassword();
	 User userobj=null;
	 if(tempemail!=null && temppass!=null)    
		{ 
		  userobj=service.fetchUserByEmailIdAndPassword(tempemail, temppass);
		}
	 
	 if(userobj==null)
	 {
		 throw new Exception("Bad Credentials"); 
	 }
	 return userobj;
		
	}
	
	
	
}
