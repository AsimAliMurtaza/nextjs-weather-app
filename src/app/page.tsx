"use client";

import { useEffect, useState } from "react";
import AirConditions from "@/components/ui/AirCondition";
import CurrentWeather from "@/components/ui/CurrentWeather";
import TodaysForecast from "@/components/ui/TodayForecast"; // Ensure this import path is correct
import SevenDayForecast from "@/components/ui/WeeklyForecast"; // Updated import name to match the provided code
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Spinner,
} from "@chakra-ui/react";
import { Weather } from "@/types/weather";
import {
  HourlyWeather,
  HourlyForecast,
  DailyForecast,
} from "@/types/hourly_forecast"; // Adjusted to import from `weather.ts` where `HourlyForecast` is defined

export default function Home() {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [hourlyForecastData, setHourlyForecastData] = useState<
    HourlyForecast[] | null
  >(null);
  const [weeklyForecastData, setWeeklyForecastData] = useState<
    DailyForecast[] | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch("/api/weather");

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data: Weather = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  useEffect(() => {
    const fetchHourlyData = async () => {
      try {
        const response = await fetch("/api/hourly-forecast");

        if (!response.ok) {
          throw new Error("Failed to fetch hourly forecast data");
        }

        const data: HourlyWeather = await response.json();
        setHourlyForecastData(data.forecast.forecastday[0].hour);
      } catch (error) {
        console.error("Error fetching hourly forecast data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHourlyData();
  }, []);

  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        const response = await fetch("/api/weekly-forecast");

        if (!response.ok) {
          throw new Error("Failed to fetch weekly forecast data");
        }

        const data: HourlyWeather = await response.json();
        setWeeklyForecastData(data.forecast.forecastday);
      } catch (error) {
        console.error("Error fetching hourly forecast data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeeklyData();
  }, []);

  if (loading) {
    return (
      <Container
        maxW="container.xl"
        p={4}
        sx={{
          backgroundColor: "#1C2432",
          borderRadius: "md",
          boxShadow: "lg",
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100vh"
      >
        <Spinner size="xl" color="blue.500" />
      </Container>
    );
  }

  return (
    <Container
      maxW="container.xl"
      p={4}
      sx={{
        backgroundColor: "#1C2432",
        borderRadius: "md",
        boxShadow: "lg",
      }}
    >
      <Flex direction="column" align="center">
        {/* Main Content */}
        <Box w="full" maxW="container.xl">
          {/* Current Weather */}
          {weatherData && <CurrentWeather weather={weatherData} />}

          {/* 7-Day Forecast */}
          <SevenDayForecast dailyForecasts={weeklyForecastData || null} />

          {/* Today's Forecast */}
          <TodaysForecast hourlyForecast={hourlyForecastData || null} />

          {/* Air Conditions */}
          {weatherData && <AirConditions weather={weatherData} />}
        </Box>
      </Flex>
    </Container>
  );
}
