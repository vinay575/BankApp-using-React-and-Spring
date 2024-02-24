package com.Bank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Bank.dto.BankAccountDTO;
import com.Bank.repository.BankRepository;

@Service
public class BankService {
	private final BankRepository bankRepository;

    @Autowired
    public BankService(BankRepository bankRepository) {
        this.bankRepository = bankRepository;
    }
    
   // method 
    public BankAccountDTO createBankAccount(BankAccountDTO bankAccount) {
        return bankRepository.save(bankAccount);
    }

}

//services uses @Service annotion 
//we call repositry inside services 
// after this we create controller 