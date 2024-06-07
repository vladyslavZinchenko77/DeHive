import React, { FC } from 'react';
import { Text, Box, Flex } from '@chakra-ui/react';
import SvgIcon from '@/components/common/SvgIcon/SvgIcon';

interface MetricData {
  title: string;
  value: string;
  description: string;
  showIcon?: boolean;
}

const metricData: MetricData[] = [
  {
    title: 'APY',
    value: '199.11%',
    description: 'APR: 257.84%',
    showIcon: true,
  },
  {
    title: 'TVL',
    value: '$124,235.00',
    description: 'Total Value Locked',
    showIcon: false,
  },
  {
    title: 'Your Deposits',
    value: '$123,123.00',
    description: '0.557890 DHV / QUICK',
    showIcon: false,
  },
];

const Metrics: FC = () => {
  return (
    <Box display="flex">
      {metricData.map((metric, index) => (
        <Box key={index} marginRight={index !== metricData.length - 1 ? 4 : 0}>
          <Text fontSize="24px" color="gray">
            {metric.title}
          </Text>
          <Flex alignItems="center" marginTop={1}>
            <Text fontSize="20px" color="#ffffff">
              {metric.value}
            </Text>
            {metric.showIcon && <SvgIcon type="question" />}
          </Flex>
          <Text marginTop={2} fontSize="16px" color="gray">
            {metric.description}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Metrics;
