// import React, { FC } from 'react';
// import { Text, Box, Flex, useMediaQuery } from '@chakra-ui/react';
// import SvgIcon from '@/components/common/SvgIcon/SvgIcon';

// interface MetricData {
//   title: string;
//   value: string;
//   description: string;
//   showIcon?: boolean;
// }

// const metricData: MetricData[] = [
//   {
//     title: 'APY',
//     value: '199.11%',
//     description: 'APR: 257.84%',
//     showIcon: true,
//   },
//   {
//     title: 'TVL',
//     value: '$124,235.00',
//     description: 'Total Value Locked',
//     showIcon: false,
//   },
//   {
//     title: 'Your Deposits',
//     value: '$123,123.00',
//     description: '0.557890 DHV / QUICK',
//     showIcon: false,
//   },
// ];

// const Metrics: FC = () => {
//   const [isMobile] = useMediaQuery('(max-width: 1279px)');
//   return (
//     <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
//       {metricData.map((metric, index) => (
//         <Box
//           display={'flex'}
//           flexDirection={isMobile ? 'row' : 'column'}
//           alignItems={'center'}
//           key={index}
//           marginRight={index !== metricData.length - 1 ? 4 : 0}
//         >
//           <Text fontSize="24px" color="gray">
//             {metric.title}
//           </Text>
//           <Flex alignItems="center" marginTop={1}>
//             <Text fontSize="20px" color="#ffffff">
//               {metric.value}
//             </Text>
//             {metric.showIcon && <SvgIcon type="question" />}
//           </Flex>
//           <Text marginTop={2} fontSize="16px" color="gray">
//             {metric.description}
//           </Text>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Metrics;

import React, { FC } from 'react';
import { Text, Box, Flex, useMediaQuery } from '@chakra-ui/react';
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
  const [isMobile] = useMediaQuery('(max-width: 1279px)');
  return (
    <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
      {metricData.map((metric, index) => (
        <Box
          display={'flex'}
          flexDirection={isMobile ? 'row' : 'column'}
          alignItems={'center'}
          justifyContent={isMobile ? 'space-between' : 'center'}
          key={index}
          marginRight={index !== metricData.length - 1 ? 4 : 0}
        >
          <Text fontSize={'24px'} color="gray">
            {metric.title}
          </Text>

          <Box display={'flex'} flexDirection={'column'}>
            <Flex alignItems="center" marginTop={1}>
              <Text fontSize={isMobile ? '16px' : '20px'} color="#ffffff">
                {metric.value}
              </Text>
              {metric.showIcon && <SvgIcon type="question" />}
            </Flex>
            <Text
              marginTop={2}
              fontSize={isMobile ? '12px' : '16px'}
              color="gray"
            >
              {metric.description}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Metrics;
