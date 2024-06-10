import React, { FC } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import CustomLegend from '../CustomLegend/CustomLegend';
import StatCard from '../StatCard/StatCard';
import BtnAdd from '../BtnAdd/BtnAdd';

interface ChartsHeaderProps {
  sx?: object;
}

const colors = {
  'ETH-CORE': '#8884d8',
  Poly: '#82ca9d',
  PolyGaming: '#ff7300',
  Add: '#00ff00',
};

const ChartsHeader: FC<ChartsHeaderProps> = ({ sx }) => {
  const [isMobile] = useMediaQuery('(max-width: 1279px)');
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={sx}
    >
      <CustomLegend colors={colors} />
      {!isMobile ? <BtnAdd /> : ''}
      {!isMobile ? <StatCard d="1D" w="1W" m="1M" y="1Y" /> : ''}
    </Box>
  );
};

export default ChartsHeader;
