'use client';
import Dashboard from '@/components/UI/Dashboard/Dashboard';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Header from '@/components/UI/Header/Header';
import Sidebar from '@/components/UI/Sidebar/Sidebar';
import MarketOverview from '@/components/UI/Dashboard/MarketOverview/MarketOverview';
import RecentActivities from '@/components/UI/Dashboard/RecentActivities/RecentActivities';
import TopPerformer from '@/components/UI/Dashboard/TopPerformer/TopPerformer';

export default function Page() {
  return (
    <>
      <Dashboard />
    </>
  );
}
