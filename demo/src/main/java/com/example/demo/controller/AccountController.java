package com.example.demo.controller;

import com.example.demo.model.Account;
import com.example.demo.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1")
public class AccountController {
    @Autowired
    private AccountRepository accountRepository;

    //get all accounts//
    @GetMapping("/accounts")
    public List<Account> getAllAccount(){
        return accountRepository.findAll();
    }

    @PostMapping("/accounts")
    public Account createAccount(@RequestBody Account account){

        return accountRepository.save(account);
    }
}
