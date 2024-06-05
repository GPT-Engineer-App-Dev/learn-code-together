import { Container, Text, VStack, Box, Heading, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to CodeMaster</Heading>
        <Text fontSize="lg" textAlign="center">Your ultimate platform to learn coding online.</Text>
        <Flex direction="row" justify="space-around" width="100%">
          <Button as={Link} to="/courses" colorScheme="teal" size="lg">View Courses</Button>
        </Flex>
        <Button as={Link} to="/get-started" colorScheme="teal" size="lg">Get Started</Button>
        <Button as={Link} to="/code-editor" colorScheme="teal" size="lg">Code Editor</Button>
      </VStack>
    </Container>
  );
};

export default Index;