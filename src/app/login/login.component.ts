import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // 👈 AQUI
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  senha: string = '';
  errorMessage: string = '';

  login() {
    if (this.email === 'admin@email.com' && this.senha === '123456') {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Woops, something is wrong, try again later!';
    }
  }

  closeError() {
    this.errorMessage = '';
  }
}