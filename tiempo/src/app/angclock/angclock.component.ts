import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-angclock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angclock.component.html',
  styleUrl: './angclock.component.css'
})
export class AngclockComponent implements OnInit {
  hourRotation: number = 0;
  minuteRotation: number = 0;
  secondRotation: number = 0;

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    this.hourRotation = (hours % 12) * 30 + minutes * 0.5; 
    this.minuteRotation = minutes * 6; 
    this.secondRotation = seconds * 6; 
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
