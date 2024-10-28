import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-circulargraph',
  standalone: true,
  imports: [],
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

  ngOnInit() {
    this.initializeProgressBasedOnCurrentTime();
    this.startTimer();

    this.updateSeconds();
    setInterval(() => this.updateSeconds(), 1000);

    this.updateMinutes();
    setInterval(() => this.updateMinutes(), 1000);

    this.updateHours();
    setInterval(() => this.updateHours(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  initializeProgressBasedOnCurrentTime() {
    const now = new Date();
    this.secondsProgress = (now.getSeconds() / 60) * 360;
    this.minutesProgress = (now.getMinutes() / 60) * 360;
    this.hoursProgress = ((now.getHours() % 12) / 12) * 360;
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.updateProgress();
    }, 1000);
  }

  updateProgress() {
    this.secondsProgress = (this.secondsProgress + 6) % 360; 
    if (this.secondsProgress === 0) {
      this.minutesProgress = (this.minutesProgress + 6) % 360; 
      if (this.minutesProgress === 0) {
        this.hoursProgress = (this.hoursProgress + 30) % 360; 
      }
    }

    this.updateSeconds();
    this.updateMinutes();
    this.updateHours();
  }


  updateSeconds(): void {
    const now = new Date();
    this.seconds = String(now.getSeconds()).padStart(2, '0');
  }

  updateMinutes(): void {
    const now = new Date();
    this.minutes = String(now.getMinutes()).padStart(2, '0');
  }

  updateHours(): void {
    const now = new Date();
    this.hours = String(now.getHours()).padStart(2, '0');
  }

}
