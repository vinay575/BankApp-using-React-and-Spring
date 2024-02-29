package com.BankApplication.dto;

public class AddMoneyRequest {
    private Integer accountId;
    private double amount;

    // Constructors, getters, and setters

    public AddMoneyRequest() {
    }

    public AddMoneyRequest(Integer accountId, double amount) {
        this.accountId = accountId;
        this.amount = amount;
    }

    public Integer getAccountId() {
        return accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
