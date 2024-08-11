import { Box, Card, Flex, Text } from "@chakra-ui/react";

export default function CurrentWeather() {
  return (
    <Card
      sx={{
        display: "flex",
      }}
      w="full"
      h="100%"
      p={4}
      bg="blue.100"
      boxShadow="xl"
    >
      <Text fontSize="4xl" fontWeight="bold">
        Madrid
      </Text>
      <Text fontSize="2xl" mb={2}>
        Chance of rain: 0%
      </Text>
      <Text fontSize="6xl" fontWeight="bold">
        31°
      </Text>
      <Text fontSize="2xl">Sunny</Text>
    </Card>
  );
}
