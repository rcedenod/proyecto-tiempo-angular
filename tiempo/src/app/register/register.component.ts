import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (!this.username || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    this.errorMessage = null;
    fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al registrarse.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Register success:', data);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
}
