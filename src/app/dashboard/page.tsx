import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import MarketOverview from './components/MarketOverview/MarketOverview';
import RecentActivities from './components/RecentActivities/RecentActivities';

const Dashboard: FC = () => {
  return (
    <>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <MarketOverview />
        <RecentActivities />
      </Flex>
    </>
  );
};

export default Dashboard;
