import { FC } from 'react';
import { Box, Flex, Text, border } from '@chakra-ui/react';

interface StatCardProps {
  d: string;
  w: string;
  m: string;
  y: string;
}

const StatCard: FC<StatCardProps> = ({ d, w, m, y }) => {
  return (
    <Box
      py={2}
      px={4}
      borderRadius={'24px'}
      border={'1px solid rgba(255, 255, 255, 0.16)'}
      cursor={'pointer'}
    >
      <Flex alignItems="center" justifyContent="space-between" gap={4}>
        <Text color="gray.500">{d}</Text>
        <Box as="span" bg={'#00FF73'} borderRadius={'24px'} py={1} px={3}>
          <Text color="black">{w}</Text>
        </Box>
        <Text color="gray.500">{m}</Text>
        <Text color="gray.500">{y}</Text>
      </Flex>
    </Box>
  );
};

export default StatCard;
