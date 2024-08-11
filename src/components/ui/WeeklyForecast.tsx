import { VStack, HStack, Text, Flex, Box, Card } from "@chakra-ui/react";
import { BsCloudSun, BsCloudRain } from "react-icons/bs";

export default function SevenDayForecast() {
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
      <VStack p={4} spacing={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          7-DAY FORECAST
        </Text>
        <HStack justifyContent="space-between" w="full">
          <Text>Today</Text>
          <BsCloudSun size="24" />
          <Text>36/22</Text>
        </HStack>
        <HStack justifyContent="space-between" w="full">
          <Text>Tue</Text>
          <BsCloudSun size="24" />
          <Text>37/21</Text>
        </HStack>
        <HStack justifyContent="space-between" w="full">
          <Text>Wed</Text>
          <BsCloudRain size="24" />
          <Text>30/20</Text>
        </HStack>
        <HStack justifyContent="space-between" w="full">
          <Text>Thu</Text>
          <BsCloudRain size="24" />
          <Text>30/20</Text>
        </HStack>
        <HStack justifyContent="space-between" w="full">
          <Text>Fri</Text>
          <BsCloudSun size="24" />
          <Text>32/20</Text>
        </HStack>
        {/* Add more days here */}
      </VStack>
    </Card>
  );
}
