import React, { FC } from 'react';
import { Flex, Circle, Text } from '@chakra-ui/react';

interface CustomLegendProps {
  colors: {
    'ETH-CORE': string;
    Poly: string;
    PolyGaming: string;
    Add: string;
  };
}

const CustomLegend: FC<CustomLegendProps> = ({ colors }) => {
  return (
    <Flex align="center" mt={4}>
      <Circle size={4} bg={colors['ETH-CORE']} mr={2} />
      <Text color="gray.400">ETH-CORE</Text>
      <Circle size={4} bg={colors.Poly} mx={2} />
      <Text color="gray.400">Poly</Text>
      <Circle size={4} bg={colors.PolyGaming} mx={2} />
      <Text color="gray.400">Poly Gaming</Text>
      <Circle size={4} bg={colors.Add} ml={2} />
      <Text color="gray.400">Add</Text>
    </Flex>
  );
};

export default CustomLegend;
