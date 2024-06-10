import React from 'react';
import { Box, Heading, Flex, useMediaQuery } from '@chakra-ui/react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import MarketOverview from './MarketOverview/MarketOverview';
import RecentActivities from './RecentActivities/RecentActivities';
import TopPerformer from './TopPerformer/TopPerformer';
import Image from 'next/image';
import sotsImg from '../../../../public/webp/sots.webp';

const Dashboard = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Box position={'relative'}>
        <Header />
        {!isMobile && <Sidebar />}
        <Box margin={'150px 50px 0 262px'} paddingBottom={'80px'}>
          <Heading marginBottom={'40px'}>Dashboard</Heading>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <MarketOverview />
            <RecentActivities />
          </Flex>
          <TopPerformer />
          <Image
            src={sotsImg}
            width={424}
            height={700}
            alt="sots"
            style={{ position: 'absolute', bottom: 0, right: 0, zIndex: -1 }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
