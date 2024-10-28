import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  isOpen = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    if (option === 'Reloj digital') {
      this.router.navigate(['/dgclock01']);
      this.isOpen = false; 
    } 

    else if (option === 'Tiempo con barras') {
      this.router.navigate(['/barsclock']);
      this.isOpen = false;
    }

    else if (option === 'Reloj analogico') {
      this.router.navigate(['/angclock']);
      this.isOpen = false; 
    }

    else if (option === 'Grafico circular') {
      this.router.navigate(['/circulargraph']);
      this.isOpen = false; 
    }
  }
}
