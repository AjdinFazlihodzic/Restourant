import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent implements OnInit {

accounts!: Account[] ;
constructor(private accountService: AccountService,private router: Router){ }
ngOnInit(): void {
  this.getAccounts();
}
private getAccounts(){
  this.accountService.getAccountList().subscribe(data => {
    this.accounts = data;
  });
}
updateAccount(id: number){
  this.router.navigate(['update-account',id]);
}
}
