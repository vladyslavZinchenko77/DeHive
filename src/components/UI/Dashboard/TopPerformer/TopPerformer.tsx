'use client';
import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import SvgIcon from '@/components/common/SvgIcon/SvgIcon';
import GradientButton from '@/components/common/GradientButton/GradientButton';
import GradientReverseButton from '@/components/common/GradientReverseButton/GradientReverseButton';
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
        background={
          'linear-gradient(45deg, rgba(28, 31, 46, 0.7), rgba(46, 54, 80, 0.11))'
        }
        alignItems={'center'}
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
          <GradientReverseButton style={{ marginTop: 30 }}>
            {'unstake'}
          </GradientReverseButton>
        </Box>
      </Box>
    </>
  );
};

export default TopPerformer;
