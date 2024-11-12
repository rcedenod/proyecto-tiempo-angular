import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-binaryclock',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownComponent],
  templateUrl: './binaryclock.component.html',
  styleUrl: './binaryclock.component.css'
})
export class BinaryclockComponent implements OnInit{
  time: Date = new Date();
  binaryTime: { hours: string[], minutes: string[], seconds: string[] } = { hours: [], minutes: [], seconds: [] };
  activeSeconds = 0;
  activeMinutes = 0;
  activeHours = 0;

  inputHours: number = this.time.getHours();
  inputMinutes: number = this.time.getMinutes();
  inputSeconds: number = this.time.getSeconds();

  interval: any;

  ngOnInit(): void {
    this.updateBinaryTime();
    this.startClock(); 
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateBinaryTime(): void {
    this.binaryTime = {
      hours: this.toBinary(this.inputHours, 5),
      minutes: this.toBinary(this.inputMinutes, 6),
      seconds: this.toBinary(this.inputSeconds, 6)
    };
    this.calculateActiveUnits();
  }

  toBinary(value: number, length: number): string[] {
    return value.toString(2).padStart(length, '0').split('');
  }

  calculateActiveUnits(): void {
    this.activeHours = this.binaryTime.hours.reduce((sum, bit, index) => sum + (bit === '1' ? Math.pow(2, 4 - index) : 0), 0);
    this.activeMinutes = this.binaryTime.minutes.reduce((sum, bit, index) => sum + (bit === '1' ? Math.pow(2, 5 - index) : 0), 0);
    this.activeSeconds = this.binaryTime.seconds.reduce((sum, bit, index) => sum + (bit === '1' ? Math.pow(2, 5 - index) : 0), 0);
  }

  startClock(): void {
    this.interval = setInterval(() => {
      this.inputSeconds++;
      if (this.inputSeconds >= 60) {
        this.inputSeconds = 0;
        this.inputMinutes++;
      }

      if (this.inputMinutes >= 60) {
        this.inputMinutes = 0;
        this.inputHours++;
      }

      if (this.inputHours >= 24) {
        this.inputHours = 0;
      }

      this.updateBinaryTime();
    }, 1000); 
  }

  onTimeChange(): void {
    this.inputHours = Math.max(0, Math.min(23, this.inputHours));
    this.inputMinutes = Math.max(0, Math.min(59, this.inputMinutes));
    this.inputSeconds = Math.max(0, Math.min(59, this.inputSeconds));
    this.updateBinaryTime(); 
  }

  getPowerOfTwo(exponent: number): number {
    return Math.pow(2, exponent);
  }

}
