import {
  Box,
  Flex,
  Text,
  Image,
  Icon,
  VStack,
  Grid,
  useColorModeValue,
  Card,
  CardBody,
} from "@chakra-ui/react";
import {
  FiWind,
  FiDroplet,
  FiSun,
  FiThermometer,
  FiMapPin,
} from "react-icons/fi";
import { Weather } from "@/types/weather";

interface CurrentWeatherProps {
  weather?: Weather;
}

export default function CurrentWeather({ weather }: CurrentWeatherProps) {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const iconColor = useColorModeValue("blue.500", "blue.300");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  if (!weather) {
    return (
      <Box
        p={4}
        bg="red.400"
        color="white"
        borderRadius="2xl"
        boxShadow="lg"
        textAlign="center"
      >
        <Text fontSize="lg" fontWeight="bold">
          Weather data is not available
        </Text>
      </Box>
    );
  }

  return (
    <Card
      w="100%"
      mx="auto"
      bg={bgColor}
      borderRadius="2xl"
      boxShadow="lg"
      borderColor={borderColor}
    >
      <CardBody p={6}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 2fr" }}
          gap={6}
          alignItems="center"
        >
          <VStack align="center" spacing={4} textAlign="center">
            <Icon as={FiMapPin} boxSize={6} color={iconColor} />
            <Text fontSize="2xl" fontWeight="bold" color={textColor}>
              {weather.location?.name || "N/A"}
            </Text>
            <Text fontSize="lg" color="gray.500">
              {weather.location?.region}, {weather.location?.country}
            </Text>
            <Image
              src={`https:${weather.current?.condition?.icon}`}
              alt={weather.current?.condition?.text}
              boxSize="80px"
            />
            <Text fontSize="6xl" fontWeight="bold" color={textColor}>
              {weather.current?.temp_c ?? "N/A"}°C
            </Text>
            <Text fontSize="lg" color="gray.500">
              Feels like: {weather.current?.feelslike_c ?? "N/A"}°C
            </Text>
            <Text fontSize="xl" fontWeight="bold" color={textColor}>
              {weather.current?.condition?.text || "N/A"}
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            <Flex align="center">
              <Icon as={FiWind} boxSize={6} color={iconColor} mr={2} />
              <Text fontSize="lg" color={textColor}>
                Wind: {weather.current?.wind_kph ?? "N/A"} kph
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={FiDroplet} boxSize={6} color={iconColor} mr={2} />
              <Text fontSize="lg" color={textColor}>
                Humidity: {weather.current?.humidity ?? "N/A"}%
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={FiSun} boxSize={6} color={iconColor} mr={2} />
              <Text fontSize="lg" color={textColor}>
                UV Index: {weather.current?.uv ?? "N/A"}
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={FiThermometer} boxSize={6} color={iconColor} mr={2} />
              <Text fontSize="lg" color={textColor}>
                Pressure: {weather.current?.pressure_mb ?? "N/A"} mb
              </Text>
            </Flex>
            <Box>
              <Text fontWeight="bold" fontSize="lg" color={textColor} mb={2}>
                Air Quality
              </Text>
              <VStack align="start" spacing={2}>
                <Text>
                  CO: {weather.current?.air_quality?.co ?? "N/A"} μg/m³
                </Text>
                <Text>
                  NO₂: {weather.current?.air_quality?.no2 ?? "N/A"} μg/m³
                </Text>
                <Text>
                  O₃: {weather.current?.air_quality?.o3 ?? "N/A"} μg/m³
                </Text>
                <Text>
                  SO₂: {weather.current?.air_quality?.so2 ?? "N/A"} μg/m³
                </Text>
                <Text>
                  PM10: {weather.current?.air_quality?.pm10 ?? "N/A"} μg/m³
                </Text>
              </VStack>
            </Box>
          </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
}
