import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reloj01',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reloj01.component.html',
  styleUrl: './reloj01.component.css'
})
export class Reloj01Component implements OnInit {

  hours: string = '';
  minutes: string = '';
  seconds: string = '';
  date: string = '';
  day: string = '';

  private intervalId: any;

  ngOnInit(): void {
    this.setInitialTime();
    this.startClock();
  }

  setInitialTime(): void {
    const now = new Date();
    this.hours = String(now.getHours()).padStart(2, '0');
    this.minutes = String(now.getMinutes()).padStart(2, '0');
    this.seconds = String(now.getSeconds()).padStart(2, '0');
    this.updateDate(now);
  }

  updateDate(date: Date): void {
    this.date = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    this.day = daysOfWeek[date.getDay()];
  }

  startClock(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpiar intervalos anteriores
    }

    this.intervalId = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock(): void {
    // Obtener la hora actual
    const now = new Date();
    
    // Calcular la hora actual sumando los inputs de horas, minutos y segundos
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(),
      parseInt(this.hours, 10), parseInt(this.minutes, 10), parseInt(this.seconds, 10));

    // Avanzar un segundo
    targetDate.setSeconds(targetDate.getSeconds() + 1);

    this.hours = String(targetDate.getHours()).padStart(2, '0');
    this.minutes = String(targetDate.getMinutes()).padStart(2, '0');
    this.seconds = String(targetDate.getSeconds()).padStart(2, '0');
    this.updateDate(targetDate);
  }

  onTimeChange(): void {
    // Validar entradas y asegurarse de que estén dentro de los límites
    this.hours = String(Math.max(0, Math.min(23, parseInt(this.hours, 10)))).padStart(2, '0');
    this.minutes = String(Math.max(0, Math.min(59, parseInt(this.minutes, 10)))).padStart(2, '0');
    this.seconds = String(Math.max(0, Math.min(59, parseInt(this.seconds, 10)))).padStart(2, '0');
  }

  onInputChange() {
    // Actualizar el reloj en tiempo real cuando se cambia el input
    this.onTimeChange();
    this.updateClock();
  }
}

//   hours: string = '';
//   minutes: string = '';
//   seconds: string = '';
//   date: string = '';
//   period: string = '';
//   day: string = '';

//   ngOnInit(): void {
//     this.updateClock();
//     setInterval(() => this.updateClock(), 1000);
//   }

//   updateClock(): void {
//     const now = new Date();
//     const hour24 = now.getHours(); 
//     this.hours = String(hour24 % 12 || 12).padStart(2, '0');
//     this.minutes = String(now.getMinutes()).padStart(2, '0');
//     this.seconds = String(now.getSeconds()).padStart(2, '0');
//     this.period = hour24 < 12 ? 'AM' : 'PM';
//     this.date = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
//     const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
//     this.day = daysOfWeek[now.getDay()];
//   }
// }
