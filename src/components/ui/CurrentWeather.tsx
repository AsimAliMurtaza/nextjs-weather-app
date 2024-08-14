import { Box, Flex, Text, Image, Icon, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FiWind, FiDroplet, FiSun, FiThermometer } from "react-icons/fi";
import { Weather } from "@/types/weather"; // Adjust this import path based on your project structure

interface CurrentWeatherProps {
  weather?: Weather; // Make weather optional to handle undefined cases
}

export default function CurrentWeather({ weather }: CurrentWeatherProps) {
  const layout = useBreakpointValue({ base: "column", md: "row" });

  if (!weather) {
    return (
      <Box
        p={4}
        bg="red.400"
        color="white"
        borderRadius="md"
        boxShadow="lg"
        w="100%"
        textAlign="center"
      >
        <Text fontSize="lg" fontWeight="bold">Weather data is not available</Text>
      </Box>
    );
  }

  return (
    <Box
      p={4}
      bg="blue.400"
      color="white"
      borderRadius="md"
      boxShadow="lg"
      w="100%"
      maxW="800px"
      mx="auto"
    >
      <Text fontSize="4xl" fontWeight="bold" textAlign="center">
        {weather.location?.name || "N/A"}
      </Text>
      <Text fontSize="xl" fontWeight="semibold" textAlign="center">
        {weather.location?.region || "N/A"}, {weather.location?.country || "N/A"}
      </Text>
      <Text fontSize="5xl" fontWeight="bold" mt={4} textAlign="center">
        {weather.current?.temp_c ?? "N/A"}°C
      </Text>
      <Text fontSize="lg" mb={4} textAlign="center">
        Feels like: {weather.current?.feelslike_c ?? "N/A"}°C
      </Text>
      <Flex align="center" justify="center" mb={4}>
        {weather.current?.condition?.icon && (
          <Image
            src={`https:${weather.current.condition.icon}`}
            alt={weather.current.condition?.text || "N/A"}
            boxSize="70px"
            mr={4}
          />
        )}
        <Text fontSize="lg" fontWeight="bold">{weather.current?.condition?.text || "N/A"}</Text>
      </Flex>

      <VStack align="stretch" spacing={4}>
        <Flex align="center" justify={layout} mb={2}>
          <Icon as={FiWind} boxSize={6} mr={2} />
          <Text fontSize="lg">
            Wind: {weather.current?.wind_kph ?? "N/A"} kph {weather.current?.wind_dir || "N/A"}
          </Text>
        </Flex>
        <Flex align="center" justify={layout} mb={2}>
          <Icon as={FiDroplet} boxSize={6} mr={2} />
          <Text fontSize="lg">Humidity: {weather.current?.humidity ?? "N/A"}%</Text>
        </Flex>
        <Flex align="center" justify={layout} mb={2}>
          <Icon as={FiSun} boxSize={6} mr={2} />
          <Text fontSize="lg">UV Index: {weather.current?.uv ?? "N/A"}</Text>
        </Flex>
        <Flex align="center" justify={layout} mb={4}>
          <Icon as={FiThermometer} boxSize={6} mr={2} />
          <Text fontSize="lg">Pressure: {weather.current?.pressure_mb ?? "N/A"} mb</Text>
        </Flex>
        
        <Box>
          <Text fontWeight="bold" fontSize="lg">Air Quality:</Text>
          <VStack align="stretch" spacing={1} mt={2}>
            <Text>CO: {weather.current?.air_quality?.co ?? "N/A"} μg/m³</Text>
            <Text>NO₂: {weather.current?.air_quality?.no2 ?? "N/A"} μg/m³</Text>
            <Text>O₃: {weather.current?.air_quality?.o3 ?? "N/A"} μg/m³</Text>
            <Text>SO₂: {weather.current?.air_quality?.so2 ?? "N/A"} μg/m³</Text>
            <Text>PM10: {weather.current?.air_quality?.pm10 ?? "N/A"} μg/m³</Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
