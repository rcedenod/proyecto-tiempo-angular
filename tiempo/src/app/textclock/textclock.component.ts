import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from '../dropdown/dropdown.component';


@Component({
  selector: 'app-textclock',
  standalone: true,
  imports: [FormsModule, DropdownComponent],
  templateUrl: './textclock.component.html',
  styleUrl: './textclock.component.css'
})
export class TextclockComponent implements OnInit {
  timeText: string = '';
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  period: string = '';

  ngOnInit(): void {
    this.setInitialTime();
    setInterval(() => this.updateClock(), 1000);
  }

  setInitialTime(): void {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
    this.period = this.hours >= 12 ? 'por la tarde' : 'por la mañana';
  }

  onTimeChange(): void {
    this.hours = Math.max(0, Math.min(23, this.hours));
    this.minutes = Math.max(0, Math.min(59, this.minutes));
    this.seconds = Math.max(0, Math.min(59, this.seconds));
    this.updateTimeText();
  }

  updateClock(): void {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes >= 60) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.hours >= 24) {
      this.hours = 0;
    }
    this.period = this.hours >= 12 ? 'por la tarde' : 'por la mañana';
    this.updateTimeText();
  }

  updateTimeText(): void {
    this.timeText = `Son las ${this.convertToWords(this.hours % 12 || 12)} ${this.convertToWords(this.minutes)} y ${this.convertToWords(this.seconds)} segundos ${this.period}`;
  }

  convertToWords(num: number): string {
    const numbers = [
      'cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 
      'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce',
      'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete',
      'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 
      'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 
      'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve',
      'treinta', 'treinta y uno', 'treinta y dos', 'treinta y tres',
      'treinta y cuatro', 'treinta y cinco', 'treinta y seis',
      'treinta y siete', 'treinta y ocho', 'treinta y nueve', 
      'cuarenta', 'cuarenta y uno', 'cuarenta y dos', 
      'cuarenta y tres', 'cuarenta y cuatro', 'cuarenta y cinco', 
      'cuarenta y seis', 'cuarenta y siete', 'cuarenta y ocho', 
      'cuarenta y nueve', 'cincuenta', 'cincuenta y uno', 
      'cincuenta y dos', 'cincuenta y tres', 'cincuenta y cuatro', 
      'cincuenta y cinco', 'cincuenta y seis', 'cincuenta y siete', 
      'cincuenta y ocho', 'cincuenta y nueve'
    ];
    return numbers[num];
  }
}
