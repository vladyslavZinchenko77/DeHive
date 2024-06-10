import React from 'react';
import Chart from '@/components/common/Chart/Chart';
import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react';

const MarketOverview = () => {
  const [isMobile] = useMediaQuery('(max-width: 1279px)');
  return (
    <>
      <Box
        borderRadius={'24px'}
        backgroundColor={'#13141D'}
        width={isMobile ? '100%' : '54%'}
        border={'1px solid rgba(255, 255, 255, 0.16)'}
        py={'35px'}
        px={'50px'}
      >
        <Heading as="h2" fontSize={'30px'} size="md" mb="2">
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
