import { Weather } from "@/types/weather"; // Adjust this import path based on your project structure
import { Box, Text, VStack, Card, useBreakpointValue, HStack, Icon } from "@chakra-ui/react";
import { FaCloud, FaWind, FaTachometerAlt } from "react-icons/fa"; // Use relevant icons

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

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
      w={cardWidth}
      p={cardPadding}
      bg="blue.50"
      boxShadow="md"
      borderRadius="md"
      border="1px"
      borderColor="blue.200"
    >
      <HStack spacing={4} mb={4} align="center">
        <Text fontSize="2xl" fontWeight="bold" color="blue.700">
          {condition?.text ?? "N/A"}
        </Text>
        <Icon
          boxSize={10}
          color="blue.700"
        />
      </HStack>

      <Text fontWeight="bold" fontSize="lg" mb={3} color="blue.700">
        Air Quality
      </Text>
      <VStack align="start" spacing={3} fontSize="sm" color="gray.700">
        <HStack spacing={2}>
          <Text>CO: {air_quality?.co ?? "N/A"} μg/m³</Text>
        </HStack>
        <HStack spacing={2}>
          <FaWind size={24} color="blue.500" />
          <Text>NO₂: {air_quality?.no2 ?? "N/A"} μg/m³</Text>
        </HStack>
        <HStack spacing={2}>
          <FaCloud size={24} color="blue.500" />
          <Text>O₃: {air_quality?.o3 ?? "N/A"} μg/m³</Text>
        </HStack>
        <HStack spacing={2}>
          <FaTachometerAlt size={24} color="blue.500" />
          <Text>SO₂: {air_quality?.so2 ?? "N/A"} μg/m³</Text>
        </HStack>
        <HStack spacing={2}>
          <FaTachometerAlt size={24} color="blue.500" /> {/* Use a relevant icon for PM10 */}
          <Text>PM10: {air_quality?.pm10 ?? "N/A"} μg/m³</Text>
        </HStack>
      </VStack>
    </Card>
  );
}
