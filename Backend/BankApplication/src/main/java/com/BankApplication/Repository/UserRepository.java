package com.BankApplication.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BankApplication.dto.UserDTO;

public interface UserRepository extends JpaRepository<UserDTO, Integer>{
	
		UserDTO findByUsername(String username);

}
