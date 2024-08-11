import { Box, Text, HStack, VStack, Card } from '@chakra-ui/react';

export default function AirConditions() {
  return (
    <Card
      sx={{
        display: "flex",
      }}
      w="95vw"
      h="100%"
      p={4}
      bg="blue.100"
      boxShadow="xl"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>Air Conditions</Text>
      <HStack justifyContent="space-between">
        <VStack alignItems="flex-start">
          <Text>Real Feel</Text>
          <Text fontSize="2xl">30°</Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Text>Wind</Text>
          <Text fontSize="2xl">0.2 km/h</Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Text>UV Index</Text>
          <Text fontSize="2xl">3</Text>
        </VStack>
      </HStack>
    </Card>
  );
}
