import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importar FormsModule

@Component({
  selector: 'app-bars',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bars.component.html',
  styleUrl: './bars.component.css'
})
export class BarsComponent implements OnInit {

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  
  hourProgress: number = 0;
  minuteProgress: number = 0;
  secondProgress: number = 0;

  hoursArray = Array.from({ length: 25 }, (_, i) => i); // 0-24 horas
  minutesArray = Array.from({ length: 13 }, (_, i) => i * 5); // 0-60 en pasos de 5
  secondsArray = Array.from({ length: 13 }, (_, i) => i * 5); // 0-60 en pasos de 5

  ngOnInit(): void {
    this.setInitialTime();
    this.updateProgress();
    setInterval(() => this.updateProgress(), 1000);
  }

  setInitialTime(): void {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  }

  updateProgress(): void {
    this.hourProgress = (this.hours / 24) * 100;
    this.minuteProgress = (this.minutes / 60) * 100;
    this.secondProgress = (this.seconds / 60) * 100;

    // Avanzar un segundo
    this.incrementTime();
  }

  incrementTime(): void {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
        if (this.hours >= 24) {
          this.hours = 0; // Reiniciar a 0 después de 23 horas
        }
      }
    }
  }

  formatNumber(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  onTimeChange(): void {
    this.hours = Math.max(0, Math.min(23, this.hours));
    this.minutes = Math.max(0, Math.min(59, this.minutes));
    this.seconds = Math.max(0, Math.min(59, this.seconds));
    this.updateProgress();
  }
}
//   hours: number = 0;
//   minutes: number = 0;
//   seconds: number = 0;
//   currentTime: string = '';

//   hourProgress: number = 0;
//   minuteProgress: number = 0;
//   secondProgress: number = 0;

//   hoursArray = Array.from({ length: 25 }, (_, i) => i); // 0-24 horas
//   minutesArray = Array.from({ length: 13 }, (_, i) => i * 5); // 0-60 en pasos de 5
//   secondsArray = Array.from({ length: 13 }, (_, i) => i * 5); // 0-60 en pasos de 5

//   ngOnInit(): void {
//     this.updateTime();
//     setInterval(() => this.updateTime(), 1000);
//   }

//   updateTime(): void {
//     const now = new Date();
//     this.hours = now.getHours();
//     this.minutes = now.getMinutes();
//     this.seconds = now.getSeconds();
//     this.hourProgress = (this.hours / 24) * 100;
//     this.minuteProgress = (this.minutes / 60) * 100;
//     this.secondProgress = (this.seconds / 60) * 100;
//   }

//   formatNumber(value: number): string {
//     return value < 10 ? '0' + value : value.toString();
//   }

// }
