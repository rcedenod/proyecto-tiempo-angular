import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router) {}
  
  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    this.errorMessage = null;
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: this.username, password: this.password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al iniciar sesión.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Login success:', data.token);
        if (data.token) {
          localStorage.setItem("token", data.token);
          this.router.navigate(['/main']);
          
        } else {
          this.errorMessage = data.message || 'Usuario o contraseña incorrectos';
        }
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
}
