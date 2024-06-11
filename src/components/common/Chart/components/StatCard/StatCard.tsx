import { FC } from 'react';
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';

interface StatCardProps {
  d: string;
  w: string;
  m: string;
  y: string;
}

const StatCard: FC<StatCardProps> = ({ d, w, m, y }) => {
  const [isMobile] = useMediaQuery('(max-width: 1279px)');
  const [isTablet] = useMediaQuery('(max-width: 1500px)');
  return (
    <Box display={isTablet ? 'flex' : 'block'} justifyContent={'center'}>
      <Box
        marginTop={isMobile ? '30px' : 0}
        py={2}
        px={4}
        borderRadius={'24px'}
        border={'1px solid rgba(255, 255, 255, 0.16)'}
        cursor={'pointer'}
        maxWidth={'300px'}
      >
        <Flex alignItems="center" justifyContent="space-between" gap={4}>
          <Text
            color="gray.500"
            _hover={{ color: '#ffffff', transition: 'color 0.6s' }}
          >
            {d}
          </Text>
          <Box as="span" bg={'#00FF73'} borderRadius={'24px'} py={1} px={3}>
            <Text color="black">{w}</Text>
          </Box>
          <Text
            color="gray.500"
            _hover={{ color: '#ffffff', transition: 'color 0.6s' }}
          >
            {m}
          </Text>
          <Text
            color="gray.500"
            _hover={{ color: '#ffffff', transition: 'color 0.6s' }}
          >
            {y}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default StatCard;
