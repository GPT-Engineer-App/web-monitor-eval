import React from "react";
import { Container, VStack, HStack, Text, Box, IconButton, Table, Thead, Tbody, Tr, Th, Td, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { FaChartBar, FaTable, FaPlus } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <HStack spacing={4}>
          <IconButton aria-label="Chart" icon={<FaChartBar />} size="lg" />
          <IconButton aria-label="Table" icon={<FaTable />} size="lg" />
          <IconButton aria-label="Add" icon={<FaPlus />} size="lg" />
        </HStack>

        <Box w="full" p={5} shadow="md" borderWidth="1px">
          <Text fontSize="xl" mb={4}>
            Monitoring and Evaluation Dashboard
          </Text>
          <Bar data={data} options={options} />
        </Box>

        <Box w="full" p={5} shadow="md" borderWidth="1px">
          <Text fontSize="xl" mb={4}>
            Data Table
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Metric</Th>
                <Th isNumeric>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>2023-01-01</Td>
                <Td>Metric 1</Td>
                <Td isNumeric>65</Td>
              </Tr>
              <Tr>
                <Td>2023-02-01</Td>
                <Td>Metric 2</Td>
                <Td isNumeric>59</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box w="full" p={5} shadow="md" borderWidth="1px">
          <Text fontSize="xl" mb={4}>
            Add New Data
          </Text>
          <FormControl id="date" mb={4}>
            <FormLabel>Date</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl id="metric" mb={4}>
            <FormLabel>Metric</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="value" mb={4}>
            <FormLabel>Value</FormLabel>
            <Input type="number" />
          </FormControl>
          <Button colorScheme="teal" size="md">
            Add Data
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
