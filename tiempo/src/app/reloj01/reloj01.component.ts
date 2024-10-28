import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reloj01',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reloj01.component.html',
  styleUrl: './reloj01.component.css'
})
export class Reloj01Component implements OnInit {

  hours: string = '';
  minutes: string = '';
  seconds: string = '';
  date: string = '';
  day: string = '';

  private intervalId: any;

  ngOnInit(): void {
    this.setInitialTime();
    this.startClock();
  }

  setInitialTime(): void {
    const now = new Date();
    this.hours = String(now.getHours()).padStart(2, '0');
    this.minutes = String(now.getMinutes()).padStart(2, '0');
    this.seconds = String(now.getSeconds()).padStart(2, '0');
    this.updateDate(now);
  }

  updateDate(date: Date): void {
    this.date = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    this.day = daysOfWeek[date.getDay()];
  }

  startClock(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); 
    }

    this.intervalId = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock(): void {
    const now = new Date();

    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(),
      parseInt(this.hours, 10), parseInt(this.minutes, 10), parseInt(this.seconds, 10));

    targetDate.setSeconds(targetDate.getSeconds() + 1);

    this.hours = String(targetDate.getHours()).padStart(2, '0');
    this.minutes = String(targetDate.getMinutes()).padStart(2, '0');
    this.seconds = String(targetDate.getSeconds()).padStart(2, '0');
    this.updateDate(targetDate);
  }

  onTimeChange(): void {
    this.hours = String(Math.max(0, Math.min(23, parseInt(this.hours, 10)))).padStart(2, '0');
    this.minutes = String(Math.max(0, Math.min(59, parseInt(this.minutes, 10)))).padStart(2, '0');
    this.seconds = String(Math.max(0, Math.min(59, parseInt(this.seconds, 10)))).padStart(2, '0');
  }

  onInputChange() {
    this.onTimeChange();
    this.updateClock();
  }
}

