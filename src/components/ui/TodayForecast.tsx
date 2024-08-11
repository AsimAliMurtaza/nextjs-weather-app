import { HStack, VStack, Text, Box, Card } from "@chakra-ui/react";
import { BsCloudRain, BsCloudSun } from "react-icons/bs";

export default function TodaysForecast() {
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
      <HStack spacing={6} mb={8}>
        <VStack>
          <Text>6:00 AM</Text>
          <BsCloudRain size="24" />
          <Text>25°</Text>
        </VStack>
        <VStack>
          <Text>9:00 AM</Text>
          <BsCloudSun size="24" />
          <Text>28°</Text>
        </VStack>
        <VStack>
          <Text>12:00 PM</Text>
          <BsCloudSun size="24" />
          <Text>30°</Text>
        </VStack>
        <VStack>
          <Text>3:00 PM</Text>
          <BsCloudSun size="24" />
          <Text>32°</Text>
        </VStack>
        <VStack>
          <Text>6:00 PM</Text>
          <BsCloudSun size="24" />
          <Text>30°</Text>
        </VStack>
        {/* Add more time slots here */}
      </HStack>
    </Card>
  );
}
