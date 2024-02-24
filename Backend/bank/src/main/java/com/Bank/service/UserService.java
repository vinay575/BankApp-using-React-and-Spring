package com.Bank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Bank.dto.UserDTO;
import com.Bank.repository.UserRepositoryIn;


@Service
public class UserService {
	private final UserRepositoryIn userRepository;
	

    @Autowired
    public UserService(UserRepositoryIn  userRepository) {
        this.userRepository = userRepository;
		
    }
	   // method 
	public UserDTO createUser(UserDTO user) {
		return userRepository.save(user);

	}

	 public UserDTO getUserByUsername(String username) {
		 
		 	
	        return userRepository.findByUsername(username);
	    
	 }
		
	
}

//services uses @Service annotion 
//we call repositry inside services 
//after this we create controller 
