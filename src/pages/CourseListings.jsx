import { useState } from "react";
import { Container, Box, Heading, Text, Button, VStack, useToast, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "Introduction to Programming", description: "Learn the basics of programming using Python." },
  { id: 2, title: "Web Development Bootcamp", description: "Become a full-stack web developer with this comprehensive course." },
  { id: 3, title: "Data Science with Python", description: "Master data analysis and visualization with Python." },
];

const CourseListings = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const toast = useToast();

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      toast({
        title: "Enrollment Successful",
        description: "You have been enrolled in the course.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Already Enrolled",
        description: "You are already enrolled in this course.",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Flex justify="space-between" mb={4}>
        <Heading as="h1" size="xl">Available Courses</Heading>
        <Button as={Link} to="/" colorScheme="teal">Home</Button>
      </Flex>
      <VStack spacing={8}>
        {courses.map((course) => (
          <Box key={course.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading fontSize="xl">{course.title}</Heading>
            <Text mt={4}>{course.description}</Text>
            <Button mt={4} colorScheme="teal" onClick={() => handleEnroll(course.id)}>
              Enroll
            </Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default CourseListings;