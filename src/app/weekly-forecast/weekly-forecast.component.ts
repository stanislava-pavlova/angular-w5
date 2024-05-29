import { Component } from '@angular/core';
import { Forecast } from './types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weekly-forecast',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weekly-forecast.component.html',
  styleUrl: './weekly-forecast.component.scss',
})
export class WeeklyForecastComponent {
  cityName: string = 'Plovdiv';
  forecastData: Forecast[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchForecast(this.cityName);
  }

  search(): void {
    this.fetchForecast(this.cityName);
  }

  fetchForecast(city: string): void {
    this.weatherService.getWeeklyForecast(city).subscribe(
      (data: any) => (this.forecastData = data.list),
      (error) => alert('No weather information found for your city')
    );
  }
}
