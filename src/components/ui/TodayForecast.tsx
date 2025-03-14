import {
  HStack,
  VStack,
  Text,
  Card,
  Image,
  Divider,
  Box,
  useColorModeValue,
  Flex,
  Icon,
  Badge,
  Progress,
} from "@chakra-ui/react";
import { HourlyForecast } from "@/types/hourly_forecast"; // Adjust this import path based on your project structure
import { FiClock, FiThermometer, FiDroplet, FiWind } from "react-icons/fi";

interface TodaysForecastProps {
  hourlyForecast: HourlyForecast[] | null; // Allow null or undefined
}

export default function TodaysForecast({
  hourlyForecast = [], // Default to empty array if null
}: TodaysForecastProps) {
  // Color mode values
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const iconColor = useColorModeValue("blue.500", "blue.300");

  if (!hourlyForecast?.length) {
    return (
      <Card
        w="full"
        h="100%"
        p={6}
        bg={cardBg}
        boxShadow="lg"
        borderRadius="2xl"
        border="1px solid"
        borderColor={borderColor}
        textAlign="center"
      >
        <Text fontSize="lg" fontWeight="bold" color={textColor}>
          No hourly forecast data available.
        </Text>
      </Card>
    );
  }

  return (
    <Card
      w="100%"
      h="100%"
      p={6}
      bg={bgColor}
      boxShadow="lg"
      borderRadius="2xl"
      border="1px solid"
      borderColor={borderColor}
      transition="all 0.2s"
      _hover={{ transform: "scale(1.02)", shadow: "xl" }}
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4} color={textColor}>
        Hourly Forecast
      </Text>
      <Divider orientation="horizontal" mb={4} borderColor={borderColor} />

      {/* Hourly Forecast Scrollable Container */}
      <Box
        w="100%"
        overflowX="auto"
        py={2}
        px={4}
        bg={cardBg}
        borderRadius="xl"
        boxShadow="sm"
      >
        <HStack spacing={4} align="flex-start">
          {hourlyForecast.map((hour) => (
            <VStack
              key={hour.time_epoch}
              spacing={3}
              align="center"
              p={4}
              bg={bgColor}
              borderRadius="xl"
              boxShadow="md"
              minW="140px"
              maxW="140px"
              textAlign="center"
              border="1px solid"
              borderColor={borderColor}
            >
              <HStack spacing={2}>
                <Icon as={FiClock} boxSize={5} color={iconColor} />
                <Text fontSize="sm" fontWeight="medium" color={textColor}>
                  {hour.time}
                </Text>
              </HStack>

              <Image
                src={`https:${hour.condition.icon}`}
                alt={hour.condition.text}
                boxSize="50px"
              />

              <Text fontSize="xl" fontWeight="bold" color={textColor}>
                {hour.temp_c}°C
              </Text>

              <Text fontSize="sm" color="gray.500">
                {hour.condition.text}
              </Text>

              {/* Additional Weather Details */}
              <VStack spacing={1} align="start" w="full">
                <HStack spacing={2}>
                  <Icon as={FiDroplet} boxSize={4} color={iconColor} />
                  <Text fontSize="sm" color={textColor}>
                    {hour.humidity}%
                  </Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FiWind} boxSize={4} color={iconColor} />
                  <Text fontSize="sm" color={textColor}>
                    {hour.wind_kph} kph
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          ))}
        </HStack>
      </Box>

      {/* Summary Section */}
      <Box mt={6}>
        <Text fontSize="lg" fontWeight="bold" color={textColor} mb={2}>
          Summary
        </Text>
        <Text fontSize="sm" color="gray.500">
          The weather today will range from {hourlyForecast[0].temp_c}°C to{" "}
          {hourlyForecast[hourlyForecast.length - 1].temp_c}°C, with an average
          humidity of{" "}
          {(
            hourlyForecast.reduce((sum, hour) => sum + hour.humidity, 0) /
            hourlyForecast.length
          ).toFixed(1)}
          %.
        </Text>
      </Box>
    </Card>
  );
}