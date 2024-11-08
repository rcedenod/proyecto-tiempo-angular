import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pixelclock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pixelclock.component.html',
  styleUrl: './pixelclock.component.css'
})
export class PixelclockComponent implements OnInit, OnDestroy {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private timer: any;
  private isAtMidnight: boolean = false; 

  private segmentMap: { [key: string]: boolean[] } = {
    '0': [true, true, true, false, true, true, true], 
    '1': [false, false, true, false, false, true, false], 
    '2': [true, false, true, true, true, false, true], 
    '3': [true, false, true, true, false, true, true], 
    '4': [false, true, true, true, false, true, false], 
    '5': [true, true, false, true, false, true, true], 
    '6': [true, true, false, true, true, true, true], 
    '7': [true, false, true, false, false, true, false],
    '8': [true, true, true, true, true, true, true], 
    '9': [true, true, true, true, false, true, true] 
  };

  constructor() {}

  ngOnInit(): void {
    const currentTime = new Date();
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();

    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  private updateTime(): void {
    if (this.hours === 0 && this.minutes === 0 && this.seconds === 0 && !this.isAtMidnight) {
      this.isAtMidnight = true;
    }

    if (this.isAtMidnight && (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0)) {
      this.isAtMidnight = false; 
    }

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
  }

  onTimeChange(): void {
    this.hours = Math.max(0, Math.min(23, this.hours));
    this.minutes = Math.max(0, Math.min(59, this.minutes));
    this.seconds = Math.max(0, Math.min(59, this.seconds));
  }

  getSegmentClass(digit: string, segment: number): string {
    return this.segmentMap[digit][segment] ? 'on' : 'off';
  }

  formatTimeUnit(unit: number): string {
    return unit < 10 ? `0${unit}` : `${unit}`;
  }

  getFormattedSeconds(): string {
    if (this.seconds === 60) {
      this.seconds = 0;
    }

    return this.formatTimeUnit(this.seconds);
  }

  getFormattedMinutes(): string {
    if (this.minutes === 60) {
      this.minutes = 0;
    }

    return this.formatTimeUnit(this.minutes);
  }

  getFormattedHours(): string {
    if (this.hours === 24) {
      this.hours = 0;
    }

    return this.formatTimeUnit(this.hours);
  }
}
