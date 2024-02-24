package com.Bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Bank.dto.BankAccountDTO;
import com.Bank.dto.UserDTO;
import com.Bank.service.BankService;
import com.Bank.service.UserService;

@RestController         //to make it controller 
@RequestMapping("/bank") // bank--> name to call UserController

public class UserController {
	private final UserService userService;
    private final BankService bankService;
	@Autowired                     
	public UserController(UserService userService, BankService bankService) {
		
		this.userService = userService;
		this.bankService = bankService;
	}


	@PostMapping("/user")       //http request
	public UserDTO createUser(@RequestBody UserDTO user) {   //@RequestBody create a object according json data with respected variables ,id,name,...and store in user 

		return userService.createUser(user);

	}
	
//	 @PostMapping("/login")
//	    public ResponseEntity<UserDTO> loginUser(@RequestBody UserDTO loginRequest) {
//	        // Retrieve user from the database based on username
//		 UserDTO user = userService.getUserByUsername(loginRequest.getUsername());
//
//	        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
//	            // User found and password matches
//	            return ResponseEntity.ok(user);
//	        } else {
//	            // User not found or password does not match
//	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
//	        }
//	    }
	
	
	
	@GetMapping("/user")
    public ResponseEntity<UserDTO> getUserDetails(@AuthenticationPrincipal UserDTO userDetails) {
        // Retrieve user details using the logged-in username
        String username = userDetails.getUsername();
        UserDTO user = userService.getUserByUsername(username);
        return ResponseEntity.ok(user);
    }
	
	@PostMapping("/account")
	public BankAccountDTO createBankAccount(@RequestBody BankAccountDTO account) {
		
		return bankService.createBankAccount(account);
	}
	
}
