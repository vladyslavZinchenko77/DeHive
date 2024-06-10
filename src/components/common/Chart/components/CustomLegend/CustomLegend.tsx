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
    <Flex>
      <Flex>
        <Circle size={4} bg={colors['ETH-CORE']} mr={2} />
        <Flex flexDirection={'column'}>
          <Text color="#ffffff" fontSize={'16px'} lineHeight={0}>
            ETH-CORE
          </Text>
          <Text marginTop={'8px'} color={'grey'} fontSize={'14px'}>
            Ethereum
          </Text>
        </Flex>
      </Flex>

      <Flex>
        <Circle size={4} bg={colors.Poly} mx={2} />
        <Flex flexDirection={'column'}>
          <Text color="#ffffff" fontSize={'16px'} lineHeight={0}>
            Poly
          </Text>
          <Text marginTop={'8px'} color={'grey'} fontSize={'14px'}>
            Polygon
          </Text>
        </Flex>
      </Flex>

      <Circle size={4} bg={colors.PolyGaming} mx={2} />
      <Flex flexDirection={'column'}>
        <Text color="#ffffff" fontSize={'16px'} lineHeight={0}>
          Poly Gaming
        </Text>
        <Text marginTop={'8px'} color={'grey'} fontSize={'14px'}>
          Polygon
        </Text>
      </Flex>
    </Flex>
  );
};

export default CustomLegend;
