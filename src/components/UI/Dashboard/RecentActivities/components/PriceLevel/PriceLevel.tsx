import React, { FC } from 'react';

import { Flex, Text } from '@chakra-ui/react';

interface PriceLevelProps {
  bgGradient: string;
  priceLevel: string;
  time: string;
}

const PriceLevel: FC<PriceLevelProps> = ({ bgGradient, time, priceLevel }) => {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Text
        textTransform={'capitalize'}
        backgroundClip="text"
        bgGradient={bgGradient}
        fontWeight="bold"
        fontSize="14px"
      >
        {priceLevel}
      </Text>
      <Text fontSize="12px" color="#4E4F56">
        {time}
      </Text>
    </Flex>
  );
};

export default PriceLevel;
