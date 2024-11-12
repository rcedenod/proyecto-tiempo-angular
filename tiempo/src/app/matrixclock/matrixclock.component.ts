import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-matrixclock',
  standalone: true,
  imports: [FormsModule, CommonModule, DropdownComponent],
  templateUrl: './matrixclock.component.html',
  styleUrl: './matrixclock.component.css'
})
export class MatrixClockComponent implements OnInit, OnDestroy {
  matrixColumns: string[][] = [];
  intervalId: any;
  totalColumns: number = 30;
  maxNumber: number = 9;
  currentTime: string = '';  
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    this.initializeMatrix();
    this.startMatrixEffect();
    this.setInitialTime();
    this.updateTime(); 
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  initializeMatrix() {
    this.matrixColumns = Array.from({ length: this.totalColumns }, () => this.generateRandomNumbers());
  }

  generateRandomNumbers(): string[] {
    const numRows = 20;
    return Array.from({ length: numRows }, () => this.getRandomNumber());
  }

  getRandomNumber(): string {
    return Math.floor(Math.random() * (this.maxNumber + 1)).toString();
  }

  startMatrixEffect() {
    this.intervalId = setInterval(() => {
      this.matrixColumns.forEach((column, index) => {
        column.unshift(this.getRandomNumber());
        column.pop();
      });
    }, 100);
  }

  setInitialTime(): void {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  }

  updateTime() {
    setInterval(() => {
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
      this.updateClock();
    }, 1000);
  }

  updateClock() {
    const timeString = this.formatTime(this.hours, this.minutes, this.seconds);
    this.currentTime = timeString;
  }

  formatTime(hours: number, minutes: number, seconds: number): string {
    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  onTimeChange() {
    this.hours = Math.max(0, Math.min(23, this.hours));
    this.minutes = Math.max(0, Math.min(59, this.minutes));
    this.seconds = Math.max(0, Math.min(59, this.seconds));
    this.updateClock();
  }
}
