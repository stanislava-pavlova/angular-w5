import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Forecast, ForecastResponse } from './types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchForecast(this.cityName);
  }

  search(): void {
    this.fetchForecast(this.cityName);
  }

  fetchForecast(city: string): void {
    const apiKey = environment.apiKey;

    this.http
      .get<ForecastResponse>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      )
      .subscribe(
        (data) => (this.forecastData = data.list),
        (error) => alert('No weather information found for your city')
      );
  }
}
