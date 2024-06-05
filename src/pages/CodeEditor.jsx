import React, { useState } from 'react';
import { Container, Box, Button, VStack, Heading, Flex, Textarea } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // For simplicity, we are using eval for JavaScript execution.
      // In a real-world scenario, consider using a safer alternative.
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(error.message);
    }
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Flex justify="space-between" mb={4}>
        <Heading as="h1" size="xl">Code Editor</Heading>
        <Button as={Link} to="/" colorScheme="teal">Home</Button>
      </Flex>
      <VStack spacing={4} align="stretch">
        <Box borderWidth="1px" borderRadius="md" overflow="hidden">
          <CodeMirror
            value={code}
            options={{
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
          />
        </Box>
        <Button colorScheme="teal" onClick={runCode}>Run</Button>
        <Box borderWidth="1px" borderRadius="md" p={4} bg="gray.100">
          <Heading as="h2" size="md">Output</Heading>
          <Textarea value={output} readOnly height="200px" />
        </Box>
      </VStack>
    </Container>
  );
};

export default CodeEditor;