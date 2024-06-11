import React, { FC } from 'react';
import { Flex, Circle, Text, useMediaQuery } from '@chakra-ui/react';

interface CustomLegendProps {
  colors: {
    'ETH-CORE': string;
    Poly: string;
    PolyGaming: string;
    Add: string;
  };
}

const CustomLegend: FC<CustomLegendProps> = ({ colors }) => {
  const [isMobile] = useMediaQuery('(max-width: 1279px)');

  return (
    <Flex
      justifyContent={isMobile ? 'space-between' : 'center'}
      width={isMobile ? '100%' : 'auto'}
      flexWrap={isMobile ? 'wrap' : 'nowrap'}
    >
      <Flex
        width={isMobile ? '25%' : 'auto'}
        alignItems="center"
        mb={isMobile ? 2 : 0}
      >
        <Circle size={4} bg={colors['ETH-CORE']} mr={2} />
        <Flex flexDirection={'column'}>
          <Text
            color="#ffffff"
            fontSize={isMobile ? '12px' : '16px'}
            lineHeight={isMobile ? '14px' : '20px'}
            whiteSpace="nowrap"
          >
            ETH-CORE
          </Text>
          <Text
            marginTop={'8px'}
            color={'grey'}
            fontSize={isMobile ? '10px' : '14px'}
            lineHeight={isMobile ? '12px' : '18px'}
            whiteSpace="nowrap"
          >
            Ethereum
          </Text>
        </Flex>
      </Flex>

      <Flex
        width={isMobile ? '25%' : 'auto'}
        alignItems="center"
        mb={isMobile ? 2 : 0}
      >
        <Circle size={4} bg={colors.Poly} mx={2} />
        <Flex flexDirection={'column'}>
          <Text
            color="#ffffff"
            fontSize={isMobile ? '12px' : '16px'}
            lineHeight={isMobile ? '14px' : '20px'}
            whiteSpace="nowrap"
          >
            Poly
          </Text>
          <Text
            marginTop={'8px'}
            color={'grey'}
            fontSize={isMobile ? '10px' : '14px'}
            lineHeight={isMobile ? '12px' : '18px'}
            whiteSpace="nowrap"
          >
            Polygon
          </Text>
        </Flex>
      </Flex>

      <Flex
        width={isMobile ? '25%' : 'auto'}
        alignItems="center"
        mb={isMobile ? 2 : 0}
      >
        <Circle size={4} bg={colors.PolyGaming} mx={2} />
        <Flex flexDirection={'column'}>
          <Text
            color="#ffffff"
            fontSize={isMobile ? '12px' : '16px'}
            lineHeight={isMobile ? '14px' : '20px'}
            whiteSpace="nowrap"
          >
            Poly Gaming
          </Text>
          <Text
            marginTop={'8px'}
            color={'grey'}
            fontSize={isMobile ? '10px' : '14px'}
            lineHeight={isMobile ? '12px' : '18px'}
            whiteSpace="nowrap"
          >
            Polygon
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomLegend;
