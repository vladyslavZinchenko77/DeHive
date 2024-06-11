import React from 'react';
import { Box, Heading, Flex, useMediaQuery } from '@chakra-ui/react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import MarketOverview from './MarketOverview/MarketOverview';
import RecentActivities from './RecentActivities/RecentActivities';
import TopPerformer from './TopPerformer/TopPerformer';
import Image from 'next/image';
import sotsImg from '../../../../public/webp/sots.webp';
import lightImg from '../../../../public/webp/light.webp';

const Dashboard = () => {
  const [isMobile] = useMediaQuery('(max-width: 1279px)');
  return (
    <>
      <Box position={'relative'} marginTop={isMobile ? '140px' : 0}>
        <Header />
        {!isMobile && <Sidebar />}
        <Box
          margin={!isMobile ? '150px 50px 0 262px' : '15px 15px 0 15px'}
          paddingBottom={'80px'}
        >
          <Heading marginBottom={'40px'}>Dashboard</Heading>
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            flexDirection={isMobile ? 'column' : 'row'}
          >
            <MarketOverview />
            <RecentActivities />
          </Flex>
          <Box as="span" position={'relative'}>
            {isMobile && (
              <Image
                loading="lazy"
                width={400}
                height={800}
                src={lightImg}
                alt="light"
                style={{
                  position: 'absolute',
                  top: -80,
                  left: -100,
                  zIndex: -1,
                }}
              />
            )}
            <TopPerformer />
          </Box>

          {!isMobile && (
            <Image
              src={sotsImg}
              width={552}
              height={910}
              alt="sots"
              style={{
                position: 'absolute',
                bottom: 0,
                right: -130,
                zIndex: -1,
              }}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
