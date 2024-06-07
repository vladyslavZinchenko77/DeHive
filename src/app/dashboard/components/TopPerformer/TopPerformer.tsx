'use client';
import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import SvgIcon from '@/components/common/SvgIcon/SvgIcon';
import GradientButton from '@/components/common/GradientButton/GradientButton';
import Metrics from './components/Metrics';
import MainInfo from './components/MainInfo';

const TopPerformer: FC = () => {
  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        borderWidth={'1px'}
        borderRadius={'24px'}
        border={'1px solid rgba(255, 255, 255, 0.16)'}
      >
        <SvgIcon type="top" />
        <MainInfo />
        <Metrics />
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <GradientButton onClick={() => console.log('Stake')}>
            {'stake'}
          </GradientButton>
          <GradientButton onClick={() => console.log('Unstake')}>
            {'unstake'}
          </GradientButton>
        </Box>
      </Box>
    </>
  );
};

export default TopPerformer;
