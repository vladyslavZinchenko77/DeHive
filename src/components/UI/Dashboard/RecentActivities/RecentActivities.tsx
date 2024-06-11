import { FC } from 'react';
import { Box, Heading, Text, useMediaQuery, Grid } from '@chakra-ui/react';

import CryptoTitle from './components/CryptoTitle/CryptoTitle';
import PriceLevel from './components/PriceLevel/PriceLevel';
import { dataPoint } from './data';

const getGradientColor = (priceLevel: string) => {
  switch (priceLevel.toLowerCase()) {
    case 'join cluster':
      return 'linear-gradient(57.76deg, rgb(255, 1, 221), rgb(65, 183, 255))';
    case 'unstake cluster':
      return 'linear-gradient(34.90deg, rgb(255, 111, 79), rgb(255, 1, 221))';
    case 'stake cluster':
      return 'linear-gradient(40.84deg, rgb(255, 1, 221), rgb(65, 183, 255))';
    case 'leave cluster':
      return 'linear-gradient(34.90deg, rgb(255, 111, 79), rgb(255, 1, 221))';
    case 'stake impulse':
      return 'linear-gradient(57.76deg, rgb(255, 1, 221), rgb(65, 183, 255))';
    case 'claim rewards':
      return 'linear-gradient(34.42deg, rgb(65, 183, 255), rgb(0, 255, 115))';
    default:
      return 'none';
  }
};

const RecentActivities: FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 1279px)');
  return (
    <Box
      marginTop={isMobile ? '30px' : 0}
      borderRadius="24px"
      backgroundColor="#13141D"
      width={isMobile ? '100%' : '36%'}
      border="1px solid rgba(255, 255, 255, 0.16)"
      py="46px"
      px="28px"
    >
      <Heading as="h2" fontSize="30px" size="md" mb="2">
        Recent Activities
      </Heading>
      <Box as="ul" listStyleType="none" p={0} marginTop={'30px'}>
        {dataPoint.map((item, index) => (
          <Box key={index} as="li" mb="4">
            <Grid templateColumns="1fr 1fr 1fr" alignItems="center" gap={4}>
              <CryptoTitle
                src={item.icon}
                alt={item.title}
                title={item.title}
                volume={item.volume}
                key={index}
              />
              <Text textAlign="left" ml={4}>
                ${item.price.toFixed(2)}
              </Text>
              <PriceLevel
                bgGradient={getGradientColor(item.priceLevel)}
                priceLevel={item.priceLevel}
                time={item.time}
                key={index}
              />
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecentActivities;
