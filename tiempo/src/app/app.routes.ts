import { Routes } from '@angular/router';
import { Reloj01Component } from './reloj01/reloj01.component';
import { BarsComponent } from './bars/bars.component';
import { AngclockComponent } from './angclock/angclock.component';
import { CirculargraphComponent } from './circulargraph/circulargraph.component';
import { OrbitclockComponent } from './orbitclock/orbitclock.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dgclock01', component: Reloj01Component },
  { path: 'barsclock', component: BarsComponent },
  { path: 'angclock', component: AngclockComponent },
  { path: 'circulargraph', component: CirculargraphComponent},
  { path: 'orbitclock', component: OrbitclockComponent}
];
