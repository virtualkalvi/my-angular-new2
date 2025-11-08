import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'username@gmail.com' && this.password === 'user12345') {
      alert('Login successfully!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid email or password');
    }
  }
  clear(){
    this.username='';
    this.password='';
  }
}
