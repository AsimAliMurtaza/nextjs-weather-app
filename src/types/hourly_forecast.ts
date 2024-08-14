// src/types/weather.ts
export interface Condition {
    text: string; // Weather condition description (e.g., "Clear")
    icon: string; // URL to the weather icon
    code?: number; // Optional code for the condition
}

export interface HourlyForecast {
    time_epoch: number; // Unix timestamp for the hour
    time: string; // Time in 24-hour format (e.g., "00:00")
    temp_c: number; // Temperature in Celsius
    temp_f: number; // Temperature in Fahrenheit
    is_day: number; // Indicates if it's day (1) or night (0)
    condition: Condition; // Weather condition details
    wind_mph: number; // Wind speed in miles per hour
    wind_kph: number; // Wind speed in kilometers per hour
    wind_degree: number; // Wind direction in degrees
    wind_dir: string; // Wind direction in compass points
    pressure_mb: number; // Pressure in millibars
    pressure_in: number; // Pressure in inches of mercury
    precip_mm: number; // Precipitation in millimeters
    precip_in: number; // Precipitation in inches
    humidity: number; // Humidity percentage
    cloud: number; // Cloud cover percentage
    feelslike_c: number; // Feels like temperature in Celsius
    feelslike_f: number; // Feels like temperature in Fahrenheit
    windchill_c: number; // Wind chill temperature in Celsius
    windchill_f: number; // Wind chill temperature in Fahrenheit
    heatindex_c: number; // Heat index temperature in Celsius
    heatindex_f: number; // Heat index temperature in Fahrenheit
    dewpoint_c: number; // Dew point temperature in Celsius
    dewpoint_f: number; // Dew point temperature in Fahrenheit
    vis_km: number; // Visibility in kilometers
    vis_miles: number; // Visibility in miles
    uv: number; // UV index
    gust_mph: number; // Wind gust speed in miles per hour
    gust_kph: number; // Wind gust speed in kilometers per hour
}

export interface DailyForecast {
    date: string; // Date in YYYY-MM-DD format
    date_epoch: number; // Unix timestamp for the date
    day: {
        maxtemp_c: number; // Maximum temperature of the day in Celsius
        maxtemp_f: number; // Maximum temperature of the day in Fahrenheit
        mintemp_c: number; // Minimum temperature of the day in Celsius
        mintemp_f: number; // Minimum temperature of the day in Fahrenheit
        avgtemp_c: number; // Average temperature of the day in Celsius
        avgtemp_f: number; // Average temperature of the day in Fahrenheit
        maxwind_mph: number; // Maximum wind speed of the day in miles per hour
        maxwind_kph: number; // Maximum wind speed of the day in kilometers per hour
        totalprecip_mm: number; // Total precipitation of the day in millimeters
        totalprecip_in: number; // Total precipitation of the day in inches
        totalsnow_cm: number; // Total snow accumulation of the day in centimeters
        avgvis_km: number; // Average visibility of the day in kilometers
        avgvis_miles: number; // Average visibility of the day in miles
        avghumidity: number; // Average humidity percentage of the day
        daily_will_it_rain: number; // Indicates if it will rain (1) or not (0)
        daily_chance_of_rain: number; // Chance of rain in percentage
        daily_will_it_snow: number; // Indicates if it will snow (1) or not (0)
        daily_chance_of_snow: number; // Chance of snow in percentage
        condition: Condition; // Weather condition details for the day
        uv: number; // UV index for the day
    };
    hour: HourlyForecast[]; // Array of hourly forecasts
}

export interface HourlyWeather {
    location: {
        name: string; // Location name (e.g., "Lahore")
        region: string; // Region (e.g., "Punjab")
        country: string; // Country (e.g., "Pakistan")
        lat?: number; // Optional latitude
        lon?: number; // Optional longitude
        tz_id?: string; // Optional time zone ID
        localtime_epoch?: number; // Optional local time as Unix timestamp
        localtime?: string; // Optional local time as string
    };
    current: {
        last_updated_epoch: number; // Unix timestamp of the last update
        last_updated: string; // Last update time as string
        temp_c: number; // Current temperature in Celsius
        temp_f: number; // Current temperature in Fahrenheit
        is_day: number; // Indicates if it's day (1) or night (0)
        condition: Condition; // Current weather condition details
        wind_kph: number; // Current wind speed in kilometers per hour
        humidity: number; // Current humidity percentage
        feelslike_c: number; // Feels like temperature in Celsius
        feelslike_f: number; // Feels like temperature in Fahrenheit
    };
    forecast: {
        forecastday: DailyForecast[]; // Array of daily forecasts
    };
    alerts?: {
        alert?: any[]; // Alerts if available, could be extended with specific details if needed
    };
}
