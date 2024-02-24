package com.Bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Bank.dto.UserDTO;

public interface UserRepositoryIn extends JpaRepository<UserDTO, Integer>{
	
		UserDTO findByUsername(String username);

}
//JpaRepository contains all database related operations so we extends JpaRepository spring boot writes implementation for this interface given 
//JpaRepository<Entity name , primar key datatype>
//after repository we write services 