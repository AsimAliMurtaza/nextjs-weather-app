"use client";

import { useEffect, useState } from "react";
import AirConditions from "@/components/ui/AirCondition";
import CurrentWeather from "@/components/ui/CurrentWeather";
import TodaysForecast from "@/components/ui/TodayForecast";
import SevenDayForecast from "@/components/ui/WeeklyForecast";
import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Weather } from "@/types/weather";

export default function Home() {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('/api/weather');
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data: Weather = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchWeatherData();
  }, []);

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
      <Flex justifyContent="center">
        {/* Main Content */}
        <Box w={{ base: "100%", md: "90%" }}>
          <Grid
            templateColumns={{ base: "1fr", md: "3fr 1fr 2fr" }} // Adjusted for better responsiveness
            templateRows={{ base: "repeat(3, auto)", md: "auto auto auto" }} // Updated grid structure
            gap={8}
          >
            {/* Current Weather */}
            <GridItem colSpan={{ base: 1, md: 2 }}>
              {weatherData && <CurrentWeather weather={weatherData} />}
            </GridItem>

            {/* 7-Day Forecast */}
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <SevenDayForecast />
            </GridItem>

            {/* Today's Forecast */}
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <TodaysForecast />
            </GridItem>

            {/* Air Conditions */}
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <AirConditions />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Container>
  );
}
