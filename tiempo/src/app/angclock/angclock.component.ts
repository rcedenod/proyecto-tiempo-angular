import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from '../dropdown/dropdown.component';
@Component({
  selector: 'app-angclock',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownComponent],
  templateUrl: './angclock.component.html',
  styleUrl: './angclock.component.css'
})
export class AngclockComponent implements OnInit {

  hourRotation: number = 0;
  minuteRotation: number = 0;
  secondRotation: number = 0;

  hours: number = 0;  
  minutes: number = 0; 
  seconds: number = 0;

  ngOnInit(): void {
    this.setCurrentTime();
    this.updateClock(); 
    setInterval(() => this.updateClock(), 1000);
  }

  setCurrentTime(): void {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  }

  updateClock(): void {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
        if (this.hours === 24) {
          this.hours = 0;
        }
      }
    }

    this.hourRotation = (this.hours % 12) * 30 + this.minutes * 0.5;
    this.minuteRotation = this.minutes * 6;
    this.secondRotation = this.seconds * 6;
  }

  onTimeChange(): void {

    this.hours = Math.max(0, Math.min(23, this.hours));
    this.minutes = Math.max(0, Math.min(59, this.minutes));
    this.seconds = Math.max(0, Math.min(59, this.seconds));

    this.updateClock(); 
  }

  getHourPosition(hour: number): { left: string; top: string } {
    const angle = (hour - 3) * 30;
    const radius = 180;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`
    };
  }
}