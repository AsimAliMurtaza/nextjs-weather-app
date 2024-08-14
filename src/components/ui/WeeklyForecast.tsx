// src/components/SevenDayForecast.tsx
import {
  VStack,
  Text,
  Box,
  Card,
  Image,
  Divider,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { DailyForecast } from "@/types/hourly_forecast"; // Adjust this import path based on your project structure

interface SevenDayForecastProps {
  dailyForecasts: DailyForecast[] | null; // Array of daily forecasts
}

export default function SevenDayForecast({
  dailyForecasts,
}: SevenDayForecastProps) {
  if (!dailyForecasts?.length) {
    return (
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        w="full"
        h="100%"
        p={4}
        bg="blue.200"
        boxShadow="md"
        borderRadius="md"
      >
        <Text fontSize="lg" fontWeight="bold" color="gray.800">
          No daily forecast data available.
        </Text>
      </Card>
    );
  }

  return (
    <Card

      w="500px"
      mx="auto"
      p={4}
      h={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      bg="blue.200"
      boxShadow="md"
      borderRadius="md"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4} color="gray.800">
        7-Day Forecast
      </Text>
      <Divider orientation="horizontal" mb={4} />
      <Grid
        templateRows={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(7, 1fr)",
        }}
        gap={4}
        overflowY="auto" // Optional: To allow horizontal scrolling if needed
      >
        {dailyForecasts.map((day) => (
          <GridItem key={day.date_epoch}>
            <Flex
              align="center"
              justify="space-between"
              sx={{
                backgroundColor: "#f0f0f0",
                borderRadius: "md",
                boxShadow: "md",
              }}
            >
              <Text fontSize="sm" fontWeight="thin">
                {day.date}
              </Text>
              <Image
                src={`https:${day.day.condition.icon}`}
                alt={day.day.condition.text}
                boxSize="40px"
              />
              <Text fontSize="sm" fontWeight="thin">
                {day.day.maxtemp_c}°C / {day.day.mintemp_c}°C
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Card>
  );
}
