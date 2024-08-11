import AirConditions from "@/components/ui/AirCondition";
import CurrentWeather from "@/components/ui/CurrentWeather";
import TodaysForecast from "@/components/ui/TodayForecast";
import SevenDayForecast from "@/components/ui/WeeklyForecast";
import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.xl" sx={{
      backgroundColor: "#1C2432",
    }}>
      <Flex>
        {/* Main Content */}
        <Box w={{ base: "85%", md: "80%" }} p={4}>
          <Grid
            templateColumns={{ base: "1fr", md: "3fr 1fr 2fr" }} // Two columns on medium screens and above
            templateRows={{ base: "repeat(1, auto)", md: "auto auto" }} // Two rows
            gap={8}
          >
            {/* Current Weather */}
            <GridItem colSpan={2} rowSpan={1}>
              <CurrentWeather />
            </GridItem>

            {/* 7-Day Forecast */}
            <GridItem colSpan={1} rowSpan={2}>
              <SevenDayForecast />
            </GridItem>

            {/* Today's Forecast */}
            <GridItem colSpan={2} rowSpan={1}>
              <TodaysForecast />
            </GridItem>

            <GridItem colSpan={2} rowSpan={1}>
              <AirConditions />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Container>
  );
}
