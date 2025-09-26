import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { LoginPage } from '../login-page/login-page';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Loginservice } from '../loginservice';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private authService: Loginservice, private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Password Not Match');
      return;
    }

    // Register user using AuthService
    this.authService.register(this.email, this.password);
    this.router.navigateByUrl('login');
  }
}
