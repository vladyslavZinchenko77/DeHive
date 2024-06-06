import React from 'react';
import Chart from '@/components/common/Chart/Chart';
import { Box, Heading, Text } from '@chakra-ui/react';

const MarketOverview = () => {
  return (
    <>
      <Box borderWidth="1px" borderRadius="md" borderColor="gray.200" p="4">
        <Heading as="h2" size="md" mb="2">
          Market Overview
        </Heading>
        <Text fontSize="sm" color="gray.500" mb="4">
          Prices value updates
        </Text>
        <Chart />
      </Box>
    </>
  );
};

export default MarketOverview;
