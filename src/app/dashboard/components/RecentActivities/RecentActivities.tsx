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
    priceLevel: 'Claim Rewards',
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

const RecentActivities: FC = () => {
  return (
    <Box borderWidth="1px" borderRadius="md" p="4">
      <Heading as="h2">Recent Activities</Heading>
      <Box as="ul" listStyleType="none" p={0}>
        {dataPoint.map((item, index) => (
          <Box key={index} as="li" mb="4" display="flex" alignItems="center">
            <Image src={item.icon} alt={item.title} width={19} height={20} />
            <Box ml="3">
              <Heading as="h2" fontSize="md">
                {item.title}
              </Heading>
              <Text fontSize="sm">{item.volume}</Text>
            </Box>
            <Text flex="1" textAlign="right">
              ${item.price.toFixed(2)}
            </Text>
            <Flex flexDirection={'column'}>
              <Text>{item.priceLevel}</Text>
              <Text>{item.time}</Text>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecentActivities;
