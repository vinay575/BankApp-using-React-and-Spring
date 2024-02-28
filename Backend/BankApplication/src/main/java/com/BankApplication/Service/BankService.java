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

}
