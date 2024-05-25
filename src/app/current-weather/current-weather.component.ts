import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchWeather(this.cityName);
  }

  search(): void {
    this.fetchWeather(this.cityName);
  }

  fetchWeather(city: string): void {
    const apiKey = environment.apiKey;

    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
      .subscribe(
        (data) => (this.weatherData = data),
        (error) => alert('No weather information found for your city')
      );
  }
}
