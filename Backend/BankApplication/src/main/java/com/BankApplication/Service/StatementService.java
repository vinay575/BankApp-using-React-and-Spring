package com.BankApplication.Service;

import com.BankApplication.Repository.StatementRepository;
import com.BankApplication.dto.StatementDTO;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class StatementService {
    @Autowired
    private StatementRepository statementRepository;

    public StatementDTO createStatement(Double amount, Integer fromAccountId, Integer toAccountId) {
        StatementDTO statement = new StatementDTO();
        statement.setAmount(amount);
        statement.setTransactionDate(LocalDateTime.now());
        statement.setFromAccountId(fromAccountId);
        statement.setToAccountId(toAccountId);
        return statementRepository.save(statement);
    }
}
