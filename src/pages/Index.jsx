import React, { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";

const PageOne = ({ onNavigate }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleSave = () => {
    localStorage.setItem("userInput", inputValue);
    onNavigate(2); // Navigate to page 2
  };

  return (
    <VStack spacing={4}>
      <Text>Please enter your data:</Text>
      <Input placeholder="Type something..." value={inputValue} onChange={handleInputChange} />
      <Button colorScheme="blue" onClick={handleSave}>
        Save & Go to Page 2
      </Button>
    </VStack>
  );
};

const PageTwo = ({ onNavigate }) => {
  const savedValue = localStorage.getItem("userInput");

  return (
    <VStack spacing={4}>
      <Text>You entered:</Text>
      <Text fontSize="xl" fontWeight="bold">
        {savedValue}
      </Text>
      <Button colorScheme="teal" onClick={() => onNavigate(1)}>
        Go Back to Page 1
      </Button>
    </VStack>
  );
};

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return <Box p={5}>{currentPage === 1 ? <PageOne onNavigate={navigate} /> : <PageTwo onNavigate={navigate} />}</Box>;
};

export default Index;
