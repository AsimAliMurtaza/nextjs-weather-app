"use client";
import { useState } from "react";
import {
  Flex,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  VStack,
  Box,
  HStack,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsCloudSun } from "react-icons/bs";
import {
  FiMenu,
  FiMap,
  FiSettings,
  FiSearch,
  FiMoon,
  FiSun,
} from "react-icons/fi";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const drawerBg = useColorModeValue("gray.100", "gray.800");
  const buttonBg = useColorModeValue("blue.500", "blue.600");
  const buttonHover = useColorModeValue("blue.600", "blue.700");

  const menuItems = [
    { label: "Weather", icon: BsCloudSun },
    { label: "Cities", icon: FiMenu },
    { label: "Map", icon: FiMap },
    { label: "Settings", icon: FiSettings },
  ];

  return (
    <>
      <Flex
        as="header"
        w="full"
        p={4}
        position="fixed"
        boxShadow="lg"
        justifyContent="space-between"
        borderRadius="lg"
        align="center"
        zIndex={1000}
        bg={bg}
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color={textColor}
          letterSpacing="wide"
        >
          Weather App
        </Text>

        <HStack
          display={{ base: "none", md: "flex" }}
          bg={bg}
          p={2}
          borderRadius="full"
          boxShadow="md"
          spacing={2}
        >
          <Input
            variant="unstyled"
            placeholder="Search for cities"
            borderRadius="full"
            px={3}
            _placeholder={{ color: "gray.500" }}
            color={textColor}
          />
          <IconButton
            aria-label="Search"
            icon={<FiSearch />}
            size="md"
            color="white"
            bg={buttonBg}
            _hover={{ bg: buttonHover }}
            isRound
          />
        </HStack>

        <HStack spacing={2}>
          <IconButton
            aria-label="Toggle Theme"
            icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
            size="lg"
            isRound
            color={textColor}
            bg={bg}
            _hover={{ bg: "gray.200" }}
            onClick={toggleColorMode}
          />

          <IconButton
            aria-label="Menu"
            icon={<FiMenu />}
            size="lg"
            isRound
            color="white"
            bg={buttonBg}
            _hover={{ bg: buttonHover }}
            onClick={onOpen}
          />
        </HStack>
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={drawerBg} boxShadow="2xl" borderRadius="lg" p={4}>
          <DrawerCloseButton color={textColor} size="lg" />
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="xl"
            fontWeight="bold"
            color={textColor}
          >
            The Weather App
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4} w="full">
              {menuItems.map((item) => (
                <Box
                  key={item.label}
                  w="full"
                  p="8px"
                  borderRadius="full"
                  transition="all 0.3s"
                  _hover={{
                    bg: useColorModeValue("gray.300", "gray.700"),
                    transform: "scale(1.05)",
                    cursor: "pointer",
                  }}
                >
                  <Text
                    display="flex"
                    alignItems="center"
                    gap="1rem"
                    fontSize="md"
                    fontWeight="medium"
                    color={textColor}
                  >
                    <item.icon style={{ fontSize: "1.3rem" }} />
                    {item.label}
                  </Text>
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
