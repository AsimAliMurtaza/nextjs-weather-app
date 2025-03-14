import {
  VStack,
  Text,
  Card,
  Image,
  Divider,
  Grid,
  GridItem,
  useColorModeValue,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { DailyForecast } from "@/types/hourly_forecast";
import { FiSun, FiCloudRain, FiWind, FiThermometer } from "react-icons/fi";

interface SevenDayForecastProps {
  dailyForecasts: DailyForecast[] | null;
}

export default function SevenDayForecast({
  dailyForecasts,
}: SevenDayForecastProps) {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const iconColor = useColorModeValue("blue.500", "blue.300");

  if (!dailyForecasts?.length) {
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
          No daily forecast data available.
        </Text>
      </Card>
    );
  }

  return (
    <Card
      w="100%"
      mx="auto"
      p={6}
      bg={bgColor}
      boxShadow="lg"
      borderRadius="2xl"
      border="1px solid"
      borderColor={borderColor}
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4} color={textColor}>
        7-Day Forecast
      </Text>
      <Divider orientation="horizontal" mb={4} borderColor={borderColor} />

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {dailyForecasts.map((day) => (
          <GridItem key={day.date_epoch}>
            <Card
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="md"
              border="1px solid"
              borderColor={borderColor}
              p={4}
            >
              <Grid
                templateColumns="repeat(2, 1fr)"
                alignItems="center"
                gap={4}
              >
                <VStack align="center" justify="center">
                  <Text fontSize="lg" fontWeight="bold" color={textColor}>
                    {day.date}
                  </Text>
                  <Image
                    src={`https:${day.day.condition.icon}`}
                    alt={day.day.condition.text}
                    boxSize="60px"
                  />
                  <Text fontSize="xl" fontWeight="bold" color={textColor}>
                    {day.day.maxtemp_c}°C / {day.day.mintemp_c}°C
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {day.day.condition.text}
                  </Text>
                </VStack>
                <VStack align="start" w="full">
                  <HStack spacing={2}>
                    <Icon as={FiSun} boxSize={4} color={iconColor} />
                    <Text fontSize="sm" color={textColor}>
                      UV Index: {day.day.uv}
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FiCloudRain} boxSize={4} color={iconColor} />
                    <Text fontSize="sm" color={textColor}>
                      Rain: {day.day.daily_chance_of_rain}%
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FiWind} boxSize={4} color={iconColor} />
                    <Text fontSize="sm" color={textColor}>
                      Wind: {day.day.maxwind_kph} kph
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FiThermometer} boxSize={4} color={iconColor} />
                    <Text fontSize="sm" color={textColor}>
                      Humidity: {day.day.avghumidity}%
                    </Text>
                  </HStack>
                </VStack>
              </Grid>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Card>
  );
}
