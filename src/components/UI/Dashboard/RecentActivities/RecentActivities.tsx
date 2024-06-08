import { FC } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import ethereumSvg from '../../../../../public/svg/ethereum.svg';
import polyGamingSvg from '../../../../../public/svg/poly-game.svg';
import polyClusterSvg from '../../../../../public/svg/poly-cluster.svg';
import wmaticWthSvg from '../../../../../public/svg/wmatic-wth.svg';

const dataPoint = [
  {
    icon: ethereumSvg,
    title: 'eth-core',
    price: 123.25,
    volume: 'cluster',
    priceLevel: 'join cluster',
    time: '12:53.15 AM',
  },
  {
    icon: polyGamingSvg,
    title: 'poly gaming',
    price: 100123.25,
    volume: 'cluster',
    priceLevel: 'unstake cluster',
    time: '12:23.54 AM',
  },
  {
    icon: ethereumSvg,
    title: 'eth-core',
    price: 1543.0,
    volume: 'cluster',
    priceLevel: 'stake cluster',
    time: '11:47.22 AM',
  },
  {
    icon: polyClusterSvg,
    title: 'polycluster',
    price: 543.0,
    volume: 'cluster',
    priceLevel: 'leave cluster',
    time: '11:34.57 AM',
  },
  {
    icon: wmaticWthSvg,
    title: 'wmatic/wth',
    price: 1124.47,
    volume: 'impulse',
    priceLevel: 'stake impulse',
    time: '11:47.22 AM',
  },
  {
    icon: polyClusterSvg,
    title: 'poly cluster',
    price: 22.36,
    volume: 'cluster',
    priceLevel: 'claim rewards',
    time: '11:34.57 AM',
  },
  {
    icon: wmaticWthSvg,
    title: 'wmatic/wth',
    price: 1124.47,
    volume: 'impulse',
    priceLevel: 'stake impulse',
    time: '11:47.22 AM',
  },
  {
    icon: polyGamingSvg,
    title: 'poly gaming',
    price: 100123.25,
    volume: 'cluster',
    priceLevel: 'claim rewards',
    time: '12:23.54 AM',
  },
];

const getGradientColor = (priceLevel: string) => {
  switch (priceLevel.toLowerCase()) {
    case 'join cluster':
      return 'linear-gradient(57.76deg, rgb(255, 1, 221), rgb(65, 183, 255))';
    case 'unstake cluster':
      return 'linear-gradient(34.90deg, rgb(255, 111, 79), rgb(255, 1, 221))';
    case 'stake cluster':
      return 'linear-gradient(40.84deg, rgb(255, 1, 221), rgb(65, 183, 255))';
    case 'leave cluster':
      return 'linear-gradient(34.90deg, rgb(255, 111, 79), rgb(255, 1, 221))';
    case 'stake impulse':
      return 'linear-gradient(57.76deg, rgb(255, 1, 221), rgb(65, 183, 255))';
    case 'claim rewards':
      return 'linear-gradient(34.42deg, rgb(65, 183, 255), rgb(0, 255, 115))';
    default:
      return 'none';
  }
};

const RecentActivities: FC = () => {
  return (
    <Box
      borderRadius={'24px'}
      width={'36%'}
      border={'1px solid rgba(255, 255, 255, 0.16)'}
      py={'46px'}
      px={'28px'}
    >
      <Heading as="h2" fontSize={'30px'} size="md" mb="2">
        Recent Activities
      </Heading>
      <Box as="ul" listStyleType="none" p={0}>
        {dataPoint.map((item, index) => (
          <Box key={index} as="li" mb="4" display="flex" alignItems="center">
            <Image src={item.icon} alt={item.title} width={19} height={20} />
            <Box ml="3">
              <Heading as="h2" fontSize="16px" textTransform={'uppercase'}>
                {item.title}
              </Heading>
              <Text fontSize="14px" color={'#4E4F56'}>
                {item.volume}
              </Text>
            </Box>
            <Text flex="1" textAlign="right">
              ${item.price.toFixed(2)}
            </Text>
            <Flex flexDirection={'column'} ml="3">
              <Text
                backgroundClip="text"
                bgGradient={getGradientColor(item.priceLevel)}
                fontWeight="bold"
                fontSize="14px"
              >
                {item.priceLevel}
              </Text>
              <Text fontSize="12px" color={'#4E4F56'}>
                {item.time}
              </Text>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecentActivities;
