package com.patrick.calorie.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.patrick.calorie.models.LoginUser;
import com.patrick.calorie.models.User;
import com.patrick.calorie.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	
	private UserRepository userRepo;
	
	//=== create ===
	public User createUser(User registeringUser) {
		String hashed = BCrypt.hashpw(registeringUser.getPassword(),BCrypt.gensalt());
		registeringUser.setPassword(hashed);
		return userRepo.save(registeringUser);
	}
	
	// === Get One ===
	public User getUser(String Email) {
		Optional<User>potentialUser = userRepo.findByEmail(Email);
		return potentialUser.isPresent()?potentialUser.get():null;
	}
	
	public User findUsername(String Username) {
		Optional<User>potentialUser = userRepo.findByUsername(Username);
		return potentialUser.isPresent()?potentialUser.get():null;
	}
	// === Login ===
	public User login(LoginUser loginUser,BindingResult result) {
		if(result.hasErrors()) {
			return null;
		}
		User existingUser = getUser(loginUser.getEmail());
		if(existingUser == null) {
			result.rejectValue("email","Unique" ,"Bad Creds");
			return null;
		}
		if(!BCrypt.checkpw(loginUser.getPassword(), existingUser.getPassword())) {
			result.rejectValue("email","Unique" ,"Bad Creds");
			return null;
		}
		return existingUser;
	}
    public User findUser(Long userId) {
        Optional<User> optionalUser = userRepo.findById(userId);
        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else
            return null;
    }
	//=== Get ALL ===
    public List<User> allUsers() {
        return userRepo.findAll();
    }

}