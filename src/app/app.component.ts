import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CurrentWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather-app';
}
