'use client';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Header from '@/components/UI/Header/Header';
import Sidebar from '@/components/UI/Sidebar/Sidebar';
import MarketOverview from '@/components/UI/Dashboard/MarketOverview/MarketOverview';
import RecentActivities from '@/components/UI/Dashboard/RecentActivities/RecentActivities';
import TopPerformer from '@/components/UI/Dashboard/TopPerformer/TopPerformer';

export default function Page() {
  return (
    <>
      <Header />
      <Sidebar
        style={{
          position: 'fixed',
          top: 76,
          left: 0,
          bottom: 0,
        }}
      />
      <Box margin={'150px 50px 0 262px'} paddingBottom={'80px'}>
        <Heading marginBottom={'40px'}>Dashboard</Heading>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <MarketOverview />
          <RecentActivities />
        </Flex>
        <TopPerformer />
      </Box>
    </>
  );
}
