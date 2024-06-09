import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { UpdateAccountComponent } from './update-account/update-account.component';

const routes: Routes = [
  {path: '', redirectTo: '/acc-list', pathMatch: 'full' },
  {path: 'acc-list',component:AccountListComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'update-account/:id',component:UpdateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
