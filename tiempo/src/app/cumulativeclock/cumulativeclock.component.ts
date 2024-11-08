import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cumulativeclock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cumulativeclock.component.html',
  styleUrl: './cumulativeclock.component.css'
})
export class CumulativeclockComponent implements OnInit {
  seconds: number[] = [];
  minutes: number[] = [];
  hours: number[] = [];

  currentSecond: number = 0;
  currentMinute: number = 0;
  currentHour: number = 0;

  private isAtMidnight: boolean = false;

  ngOnInit(): void {
    const currentTime = new Date();
    this.currentHour = currentTime.getHours();
    this.currentMinute = currentTime.getMinutes();
    this.currentSecond = currentTime.getSeconds();

    this.initializeUnits();
    this.initializeClock();
  }

  initializeUnits(): void {
    this.seconds = Array.from({ length: 60 }, (_, i) => i);
    this.minutes = Array.from({ length: 60 }, (_, i) => i);
    this.hours = Array.from({ length: 24 }, (_, i) => i);
  }

  initializeClock(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  onTimeChange(): void {
    this.currentHour = Math.max(0, Math.min(23, this.currentHour));
    this.currentMinute = Math.max(0, Math.min(59, this.currentMinute));
    this.currentSecond = Math.max(0, Math.min(59, this.currentSecond));
  }

  updateTime(): void {
    if (this.currentHour === 0 && this.currentMinute === 0 && this.currentSecond === 0 && !this.isAtMidnight) {
      this.isAtMidnight = true;
    }

    if (this.isAtMidnight && (this.currentHour !== 0 || this.currentMinute !== 0 || this.currentSecond !== 0)) {
      this.isAtMidnight = false; 
    }

    this.currentSecond++;
    if (this.currentSecond >= 60) {
      this.currentSecond= 0;
      this.currentMinute++;
    }

    if (this.currentMinute >= 60) {
      this.currentMinute = 0;
      this.currentHour++;
    }

    if (this.currentHour >= 24) {
      this.currentHour = 0;
    }
  }
}
