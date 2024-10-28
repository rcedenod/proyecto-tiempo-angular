import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulargraph',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './circulargraph.component.html',
  styleUrl: './circulargraph.component.css'
})
export class CirculargraphComponent implements OnInit, OnDestroy{

  hours: string = '';
  minutes: string = ''; 
  seconds: string = ''; 
  secondsProgress: number = 0;
  minutesProgress: number = 0;
  hoursProgress: number = 0;
  private intervalId: any;

  inputHours: number = 0;
  inputMinutes: number = 0;
  inputSeconds: number = 0;

  ngOnInit() {
    this.initializeProgressBasedOnCurrentTime();
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  initializeProgressBasedOnCurrentTime() {
    const now = new Date();
    this.inputSeconds = now.getSeconds();
    this.inputMinutes = now.getMinutes();
    this.inputHours = now.getHours();
    this.updateProgress();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.updateProgress();
    }, 1000);
  }

  updateProgress() {
    this.secondsProgress = (this.inputSeconds / 60) * 360;
    this.minutesProgress = (this.inputMinutes / 60) * 360;
    this.hoursProgress = ((this.inputHours % 12) / 12) * 360;

    this.inputSeconds++;
    if (this.inputSeconds >= 60) {
      this.inputSeconds = 0;
      this.inputMinutes++;
      if (this.inputMinutes >= 60) {
        this.inputMinutes = 0;
        this.inputHours++;
        if (this.inputHours >= 24) {
          this.inputHours = 0;
        }
      }
    }

    this.updateSeconds();
    this.updateMinutes();
    this.updateHours();
  }

  updateSeconds(): void {
    this.seconds = String(this.inputSeconds).padStart(2, '0');
  }

  updateMinutes(): void {
    this.minutes = String(this.inputMinutes).padStart(2, '0');
  }

  updateHours(): void {
    this.hours = String(this.inputHours).padStart(2, '0');
  }

  setTime() {
    this.inputSeconds = Math.max(0, Math.min(59, Math.floor(this.inputSeconds))); 
    this.inputMinutes = Math.max(0, Math.min(59, this.inputMinutes));
    this.inputHours = Math.max(0, Math.min(23, this.inputHours));
    this.updateProgress();
  }
}

