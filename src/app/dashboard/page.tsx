'use client';
import { FC } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Header from '@/components/UI/Header/Header';
import MarketOverview from './components/MarketOverview/MarketOverview';
import RecentActivities from './components/RecentActivities/RecentActivities';
import TopPerformer from './components/TopPerformer/TopPerformer';
import logoSvg from '../../../public/svg/logo.svg';
import Sidebar from '@/components/UI/Sidebar/Sidebar';

const Dashboard: FC = () => {
  return (
    <>
      <Header
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
      />
      <Sidebar
        style={{
          position: 'fixed',
          top: 76,
          left: 0,
          bottom: 0,
        }}
      />
      <Box marginLeft={'362px'} marginTop={'150px'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <MarketOverview />
          <RecentActivities />
        </Flex>
        <TopPerformer />
      </Box>
    </>
  );
};

export default Dashboard;
