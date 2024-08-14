// src/components/TodaysForecast.tsx
import { HStack, VStack, Text, Card, Image, Divider, Box } from "@chakra-ui/react";
import { HourlyForecast } from "@/types/hourly_forecast"; // Adjust this import path based on your project structure

interface TodaysForecastProps {
  hourlyForecast: HourlyForecast[] | null; // Allow null or undefined
}

export default function TodaysForecast({
  hourlyForecast = [], // Default to empty array if null
}: TodaysForecastProps) {

  if (!hourlyForecast?.length) {
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
          No hourly forecast data available.
        </Text>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      w="100%"
      h="100%"
      p={4}
      bg="blue.200"
      boxShadow="md"
      borderRadius="md"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4} color="gray.800">
        Hourly Forecast
      </Text>
      <Divider orientation="horizontal" mb={4} />
      <Box
        w="100%"
        overflowX="auto"
        py={2}
        px={4}
        bg="blue.100"
        borderRadius="md"
        boxShadow="sm"
      >
        <HStack spacing={4} align="flex-start">
          {hourlyForecast.map((hour) => (
            <VStack
              key={hour.time_epoch}
              spacing={2}
              align="center"
              p={3}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              minW="120px"
              maxW="120px"
              textAlign="center"
            >
              <Text fontSize="sm" fontWeight="medium">{hour.time}</Text>
              <Image
                src={`https:${hour.condition.icon}`}
                alt={hour.condition.text}
                boxSize="40px"
              />
              <Text fontSize="md" fontWeight="bold">{hour.temp_c}°C</Text>
              <Text fontSize="sm" color="gray.600">{hour.condition.text}</Text>
            </VStack>
          ))}
        </HStack>
      </Box>
    </Card>
  );
}
