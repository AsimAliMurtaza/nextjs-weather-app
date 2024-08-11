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
} from "@chakra-ui/react";
import { BsCloudSun } from "react-icons/bs";
import { FiMenu, FiMap, FiSettings, FiSearch } from "react-icons/fi";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        color="white"
        p={4}
        boxShadow="md"
        justifyContent="space-between"
        sx={{
          backgroundColor: "#1C2432",
        }}
      >
        <Text fontSize="2xl" fontWeight="bold" color="#ffffff" mt={2}>
          Weather App
        </Text>
        <HStack>
          <Input
            variant="outline"
            placeholder="Search for cities"
            borderRadius="lg"
          />
          <IconButton
            aria-label="Search"
            icon={<FiSearch />}
            size="md"
            color="#02003D"
            isRound
          />
        </HStack>
        <IconButton
          aria-label="Menu"
          icon={<FiMenu />}
          size="lg"
          isRound
          color={"#02003D"}
          bg={"#ffffff"}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay bg="rgba(0,0,0,0.5)" backdropFilter="blur(2px)" />
        <DrawerContent
          bg="rgba(255, 255, 255, 0.1)" // Semi-transparent background
          backdropFilter="blur(10px)" // Apply blur effect
          boxShadow="lg"
        >
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" sx={{
            color: "#ffffff",
          }}>The Weather App</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4} w="full">
              {menuItems.map((item) => (
                <Box
                  key={item.label}
                  w="full"
                  p="0.5rem"
                  borderRadius="lg"
                  _hover={{ bg: "#1C2432", cursor: "pointer" }}
                >
                  <Text display="flex" alignItems="center" gap="1rem" sx={{
                    color: "#ffffff",
                  }}>
                    <item.icon style={{ color: "#ffffff", fontSize: "1.5rem" }} />
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
