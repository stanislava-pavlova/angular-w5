import { Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeeklyForecastComponent } from './weekly-forecast/weekly-forecast.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: CurrentWeatherComponent },
  { path: 'forecast', component: WeeklyForecastComponent },
  { path: '**', component: NotFoundComponent }
];
