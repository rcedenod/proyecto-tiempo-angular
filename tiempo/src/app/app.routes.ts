import { RouterModule, Routes } from '@angular/router';
import { Reloj01Component } from './reloj01/reloj01.component';
import { BarsComponent } from './bars/bars.component';
import { AngclockComponent } from './angclock/angclock.component';
import { CirculargraphComponent } from './circulargraph/circulargraph.component';
import { OrbitclockComponent } from './orbitclock/orbitclock.component';
import { BinaryclockComponent } from './binaryclock/binaryclock.component';
import { TextclockComponent } from './textclock/textclock.component';
import { MatrixClockComponent } from './matrixclock/matrixclock.component';
import { PixelclockComponent } from './pixelclock/pixelclock.component';
import { CumulativeclockComponent } from './cumulativeclock/cumulativeclock.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', component: MainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dgclock01', component: Reloj01Component },
  { path: 'barsclock', component: BarsComponent },
  { path: 'angclock', component: AngclockComponent },
  { path: 'circulargraph', component: CirculargraphComponent},
  { path: 'orbitclock', component: OrbitclockComponent},
  { path: 'binaryclock', component: BinaryclockComponent},
  { path: 'textclock', component: TextclockComponent},
  { path: 'matrixclock', component: MatrixClockComponent},
  { path: 'pixelclock', component: PixelclockComponent },
  { path: 'cumulativeclock', component: CumulativeclockComponent }
];
