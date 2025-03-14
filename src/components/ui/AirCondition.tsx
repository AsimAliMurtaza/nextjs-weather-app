import { Weather } from "@/types/weather"; // Adjust this import path based on your project structure
import {
  Box,
  Text,
  VStack,
  Card,
  useBreakpointValue,
  HStack,
  Icon,
  Flex,
  Badge,
  Progress,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCloud, FaWind, FaTachometerAlt, FaSmog, FaLeaf } from "react-icons/fa"; // Use relevant icons

interface AirConditionsProps {
  weather: Weather; // Ensure Weather type includes the air_quality property
}

export default function AirConditions({ weather }: AirConditionsProps) {
  // Destructure air_quality and condition for easier access
  const { air_quality } = weather?.current || {};
  const { condition } = weather?.current || {};

  // Responsive width and padding based on screen size
  const cardWidth = useBreakpointValue({ base: "100%", md: "90%", lg: "80%" });
  const cardPadding = useBreakpointValue({ base: 4, md: 6 });

  // Color mode values
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const iconColor = useColorModeValue("blue.500", "blue.300");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  // Air Quality Index (AQI) calculation (example)
  const aqi = air_quality
    ? Math.round(
        (air_quality.co + air_quality.no2 + air_quality.o3 + air_quality.so2 + air_quality.pm10) / 5
      )
    : 0;

  return (
    <Card
      p={cardPadding}
      bg={bgColor}
      boxShadow="lg"
      borderRadius="2xl"
      border="1px solid"
      borderColor={borderColor}
      transition="all 0.2s"
      _hover={{ transform: "scale(1.02)", shadow: "xl" }}
    >
      <Flex direction="column" align="start" justify="center">
        {/* Weather Condition */}
        <HStack spacing={4} mb={4} align="center">
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>
            {condition?.text ?? "N/A"}
          </Text>
          <Icon as={FaCloud} boxSize={8} color={iconColor} />
        </HStack>

        {/* Air Quality Title */}
        <Text fontWeight="bold" fontSize="lg" mb={3} color={textColor}>
          Air Quality
        </Text>

        {/* Air Quality Index (AQI) */}
        <Box w="full" mb={4}>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Air Quality Index (AQI)
          </Text>
          <Progress value={aqi} colorScheme="blue" size="sm" borderRadius="full" />
          <Text fontSize="sm" color="gray.500" mt={2}>
            {aqi} / 100
          </Text>
        </Box>

        {/* Air Quality Metrics */}
        <VStack align="start" spacing={4} w="full">
          <HStack spacing={4}>
            <Icon as={FaWind} boxSize={6} color={iconColor} />
            <Text fontSize="sm" color={textColor}>
              CO: {air_quality?.co ?? "N/A"} μg/m³
            </Text>
          </HStack>
          <HStack spacing={4}>
            <Icon as={FaSmog} boxSize={6} color={iconColor} />
            <Text fontSize="sm" color={textColor}>
              NO₂: {air_quality?.no2 ?? "N/A"} μg/m³
            </Text>
          </HStack>
          <HStack spacing={4}>
            <Icon as={FaCloud} boxSize={6} color={iconColor} />
            <Text fontSize="sm" color={textColor}>
              O₃: {air_quality?.o3 ?? "N/A"} μg/m³
            </Text>
          </HStack>
          <HStack spacing={4}>
            <Icon as={FaTachometerAlt} boxSize={6} color={iconColor} />
            <Text fontSize="sm" color={textColor}>
              SO₂: {air_quality?.so2 ?? "N/A"} μg/m³
            </Text>
          </HStack>
          <HStack spacing={4}>
            <Icon as={FaLeaf} boxSize={6} color={iconColor} />
            <Text fontSize="sm" color={textColor}>
              PM10: {air_quality?.pm10 ?? "N/A"} μg/m³
            </Text>
          </HStack>
        </VStack>

        {/* Air Quality Status Badge */}
        <Badge
          colorScheme={
            aqi <= 50 ? "green" : aqi <= 100 ? "yellow" : aqi <= 150 ? "orange" : "red"
          }
          mt={4}
          borderRadius="full"
          px={3}
          py={1}
        >
          {aqi <= 50
            ? "Good"
            : aqi <= 100
            ? "Moderate"
            : aqi <= 150
            ? "Unhealthy for Sensitive Groups"
            : "Unhealthy"}
        </Badge>
      </Flex>
    </Card>
  );
}