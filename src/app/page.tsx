'use client';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Header from '@/components/UI/Header/Header';
import Sidebar from '@/components/UI/Sidebar/Sidebar';
import MarketOverview from '@/components/UI/Dashboard/MarketOverview/MarketOverview';
import RecentActivities from '@/components/UI/Dashboard/RecentActivities/RecentActivities';
import TopPerformer from '@/components/UI/Dashboard/TopPerformer/TopPerformer';
import logoSvg from '../../public/svg/logo.svg';

export default function Page() {
  return (
    <>
      {/* <Header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 5,
          backgroundColor: '#1E1E1E',
        }}
        logo={logoSvg}
        title="DeHive"
        onButtonClick={() => {
          console.log('click');
        }}
        onSelectChange={() => {
          console.log('change');
        }}
        options={['one', 'two', 'three']}
      /> */}
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
