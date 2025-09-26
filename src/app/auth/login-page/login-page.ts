import { Component } from '@angular/core';
import { Loginservice } from '../loginservice';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private authService: Loginservice, private router: Router) {}
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.authService.login(this.email, this.password)) {
      alert('Login Success');
      this.router.navigate(['/home']); // go to checkout
    } else {
      alert('Login Failed');
    }
  }
}
