package com.BankApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BankApplication.Service.UserService;
import com.BankApplication.dto.UserDTO;

@CrossOrigin(origins = "*" , allowedHeaders ="*")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	@GetMapping("/get")
	public List<UserDTO> getUser(){
		return userService.getUser();
	}
	@PostMapping("/add")
	public UserDTO addUser(@RequestBody UserDTO UserDTO) {
		return userService.createUser(UserDTO);
	} 
	@GetMapping("/get/{userName}")
	public UserDTO getUserByName(@PathVariable String userName) {
		return userService.getUserByName(userName);
	}
		
}
