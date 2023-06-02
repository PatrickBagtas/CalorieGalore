package com.patrick.calorie.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.patrick.calorie.models.LoginUser;
import com.patrick.calorie.models.User;
import com.patrick.calorie.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
@CrossOrigin
@Controller
public class UserController {

	@Autowired
	private UserService userServ;
	
	

	    @PostMapping("/register")
	    public ResponseEntity<String> registerUser(@RequestBody User user,HttpSession session, BindingResult result) {
	        // Check if the user already exists in the database
	        if (userServ.findUsername(user.getUsername()) != null) {
	            return ResponseEntity.badRequest().body("Username already exists");
	        }

	        if (userServ.getUser(user.getEmail())!=null) {
	            return ResponseEntity.badRequest().body("Email already exists");
	        }

	        // Save the user in the database
	        User newUser= userServ.createUser(user);
			session.setAttribute("user_id", newUser.getId());

	        // Return a success response
	        return ResponseEntity.ok("Registration successful");
	    }
	    
	    @PostMapping("/login")
	    public ResponseEntity<String>loginUser(@Valid @RequestBody LoginUser newLogin ,HttpSession session,BindingResult result, Model model){
	    	User user = userServ.login(newLogin,result);
			if(result.hasErrors()) {
				model.addAttribute("newUser",new User());
				return ResponseEntity.badRequest().body("Error");

			}
			session.setAttribute("user_id", user.getId());
			 return ResponseEntity.ok("Login successful");
	    }
	    
		@GetMapping("/logout")
		public ResponseEntity<String> logoutUser(HttpSession session) {
			session.invalidate();
			 return ResponseEntity.ok("Logout successful");
		}
	}

