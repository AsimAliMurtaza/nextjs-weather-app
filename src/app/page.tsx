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
  Spinner,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
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

  // Color mode values
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const tabBgColor = useColorModeValue("white", "gray.800");
  const tabSelectedColor = useColorModeValue("blue.500", "blue.300");

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
    <Container maxW="100vw" pt={20} bg={bgColor} color={textColor}>
      <Flex direction="column" align="center">
        {/* Tabs for Components */}
        <Tabs variant="line" colorScheme="blue" w="full">
          <TabList mt={8} bg={tabBgColor} borderRadius="lg">
            <Tab>Current Weather</Tab>
            <Tab>7-Day Forecast</Tab>
            <Tab>Today's Forecast</Tab>
            <Tab>Air Conditions</Tab>
          </TabList>

          <TabPanels>
            {/* Current Weather Tab */}
            <TabPanel>
              {weatherData && <CurrentWeather weather={weatherData} />}
            </TabPanel>

            {/* 7-Day Forecast Tab */}
            <TabPanel>
              <SevenDayForecast dailyForecasts={weeklyForecastData || null} />
            </TabPanel>

            {/* Today's Forecast Tab */}
            <TabPanel>
              <TodaysForecast hourlyForecast={hourlyForecastData || null} />
            </TabPanel>

            {/* Air Conditions Tab */}
            <TabPanel>
              {weatherData && <AirConditions weather={weatherData} />}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  );
}
