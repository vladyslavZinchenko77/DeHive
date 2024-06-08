import React from 'react';
import Chart from '@/components/common/Chart/Chart';
import { Box, Heading, Text } from '@chakra-ui/react';

const MarketOverview = () => {
  return (
    <>
      <Box
        borderRadius={'24px'}
        width={'54%'}
        border={'1px solid rgba(255, 255, 255, 0.16)'}
        py={'35px'}
        px={'50px'}
      >
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
