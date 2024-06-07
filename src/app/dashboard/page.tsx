import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import MarketOverview from './components/MarketOverview/MarketOverview';
import RecentActivities from './components/RecentActivities/RecentActivities';
import TopPerformer from './components/TopPerformer/TopPerformer';

const Dashboard: FC = () => {
  return (
    <>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <MarketOverview />
        <RecentActivities />
      </Flex>
      <TopPerformer />
    </>
  );
};

export default Dashboard;
