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
      <Text fontSize={'30px'}>Top performer</Text>
      <Box
        position={'relative'}
        marginTop={'30px'}
        display={'flex'}
        justifyContent={'space-between'}
        background={'linear-gradient(45deg, #1C1F2E, #2E3650)'}
        alignItems={'center'}
        borderWidth={'1px'}
        borderRadius={'24px'}
        border={'1px solid rgba(255, 255, 255, 0.16)'}
        py={'35px'}
        px={'50px'}
      >
        <SvgIcon
          type="impulse"
          style={{ position: 'absolute', top: 20, left: -4 }}
        />
        <SvgIcon type="top" />
        <MainInfo />
        <Metrics />
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <GradientButton
            style={{ textTransform: 'capitalize' }}
            onClick={() => console.log('Stake')}
          >
            {'stake'}
          </GradientButton>
          <GradientButton
            style={{ marginTop: 30, textTransform: 'capitalize' }}
            onClick={() => console.log('Unstake')}
          >
            {'unstake'}
          </GradientButton>
        </Box>
      </Box>
    </>
  );
};

export default TopPerformer;
