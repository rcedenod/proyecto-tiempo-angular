import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from "../dropdown/dropdown.component";

@Component({
  selector: 'app-orbitclock',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownComponent],
  templateUrl: './orbitclock.component.html',
  styleUrl: './orbitclock.component.css'
})
export class OrbitclockComponent implements OnInit {
  currentHour: number = 0;
  currentMinute: number = 0;
  currentSecond: number = 0;

  hourRadius: number = 240;
  minuteRadius: number = 180;
  secondRadius: number = 120;

  ngOnInit(): void {
    this.setInitialTime();
    setInterval(() => this.updateClock(), 1000);
  }

  onTimeChange(): void {
    this.currentHour = Math.max(0, Math.min(23, this.currentHour));
    this.currentMinute = Math.max(0, Math.min(59, this.currentMinute));
    this.currentSecond = Math.max(0, Math.min(59, this.currentSecond));
  }

  updateClock(): void {
    this.currentSecond++;
    if (this.currentSecond >= 60) {
      this.currentSecond = 0;
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

  setInitialTime(): void {
    const now = new Date();
    this.currentHour = now.getHours();
    this.currentMinute = now.getMinutes();
    this.currentSecond = now.getSeconds();
  }

  getOrbitPosition(unit: number, maxUnit: number, radius: number): { x: string; y: string } {
    const angle = (unit / maxUnit) * 2 * Math.PI - Math.PI / 2;
    return {
      x: `${Math.cos(angle) * radius}px`,
      y: `${Math.sin(angle) * radius}px`
    };
  }

  getNumberPosition(unit: number, maxUnit: number, radius: number): { x: string; y: string } {
    const angle = (unit / maxUnit) * 2 * Math.PI - Math.PI / 2;
    return {
      x: `${Math.cos(angle) * radius}px`,
      y: `${Math.sin(angle) * radius}px`
    };
  }

  getMinutesAndSecondsArray(maxUnit: number): number[] {
    const result = [];
    for (let i = 0; i < maxUnit; i++) {
      if (i % 5 === 0) {
        result.push(i);
      }
    }
    return result;
  }
}
