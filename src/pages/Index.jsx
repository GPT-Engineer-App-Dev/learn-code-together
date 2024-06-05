import { Container, Text, VStack, Box, Heading, Button, Flex } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to CodeMaster</Heading>
        <Text fontSize="lg" textAlign="center">Your ultimate platform to learn coding online.</Text>
        <Flex direction="row" justify="space-around" width="100%">
          <Box textAlign="center">
            <FaCode size="3em" />
            <Text mt={2}>Learn to Code</Text>
          </Box>
          <Box textAlign="center">
            <FaLaptopCode size="3em" />
            <Text mt={2}>Practice Projects</Text>
          </Box>
          <Box textAlign="center">
            <FaChalkboardTeacher size="3em" />
            <Text mt={2}>Expert Mentors</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;