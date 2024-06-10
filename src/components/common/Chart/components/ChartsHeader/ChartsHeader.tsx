import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import CustomLegend from '../CustomLegend/CustomLegend';
import StatCard from '../StatCard/StatCard';

const colors = {
  'ETH-CORE': '#8884d8',
  Poly: '#82ca9d',
  PolyGaming: '#ff7300',
  Add: '#00ff00',
};

const ChartsHeader: FC = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <CustomLegend colors={colors} />
      <StatCard d="1D" w="1W" m="1M" y="1Y" />
    </Box>
  );
};

export default ChartsHeader;
