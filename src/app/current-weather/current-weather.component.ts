import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss',
})
export class CurrentWeatherComponent implements OnInit {
  cityName: string = 'Plovdiv';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeather(this.cityName);
  }

  search(): void {
    this.fetchWeather(this.cityName);
  }

  fetchWeather(city: string): void {
    this.weatherService.getCurrentWeather(city).subscribe(
      (data) => (this.weatherData = data),
      (error) => alert('No weather information found for your city')
    );
  }
}
