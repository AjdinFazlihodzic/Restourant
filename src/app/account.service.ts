import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseURL = "http://localhost:8080/api/v1/accounts";
  constructor(private httpClient: HttpClient) { }

  getAccountList(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseURL}`);
  }
  createAccount(account: Account): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,account);
  }
updateAccount(account: Account): Observable<Object> {
  return this.httpClient.put(`${this.baseURL}`,account);
}
}
