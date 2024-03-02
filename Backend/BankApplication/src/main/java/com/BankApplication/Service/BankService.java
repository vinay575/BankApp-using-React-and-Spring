package com.BankApplication.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BankApplication.Repository.BankRepository;
import com.BankApplication.dto.BankAccountDTO;

@Service
public class BankService {

	@Autowired
	private BankRepository bankRepository;

	public List<BankAccountDTO> getAllBankAccounts() {
		return bankRepository.findAll();
	}

	public BankAccountDTO createBankAccount(BankAccountDTO bankAccount) {
		return bankRepository.save(bankAccount);
	}
	
	 public BankAccountDTO addMoneyToAccount(Integer accountId, double amount) {
	        // Retrieve the bank account from the database
	        BankAccountDTO bankAccount = bankRepository.findById(accountId).orElse(null);

	        if (bankAccount != null) {
	            // Add the specified amount to the current balance of the bank account
	            double currentBalance = bankAccount.getCurrentBalance();
	            double newBalance = currentBalance + amount;
	            bankAccount.setCurrentBalance(newBalance);

	            // Save the updated bank account to the database
	            bankAccount = bankRepository.save(bankAccount);

	            // Return the updated bank account details
	            return bankAccount;
	        } else {
	            // Handle the case where the bank account is not found
	            throw new RuntimeException("Bank account not found with ID: " + accountId);
	        }
	    }
	
}
