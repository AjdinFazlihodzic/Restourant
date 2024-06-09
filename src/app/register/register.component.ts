import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  account: Account = new Account();

  constructor(private accountService : AccountService,private router:Router) {
   
  }
  ngOnInit(): void {
    
  }
  saveAccount() {
    this.accountService.createAccount(this.account).subscribe(
      data => {
        console.log(data);
        this.goToAccountList();
      },
      error => {
        console.log(error);
      
      }
    );
  }
  goToAccountList(){
    this.router.navigate(['/acc-list']);
  }
  onSubmit(){
    console.log(this.account)
    this.saveAccount();
  }

  
}

