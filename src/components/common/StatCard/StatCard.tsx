import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface StatCardProps {
  d: string;
  w: string;
  m: string;
  y: string;
}

const StatCard: FC<StatCardProps> = ({ d, w, m, y }) => {
  return (
    <Box bg="gray.800" borderRadius="md" p={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text color="green.500" fontWeight="bold" fontSize="2xl">
          {w}
        </Text>
        <Flex>
          <Text color="gray.500" mr={2}>
            {d}
          </Text>
          <Text color="gray.500" mr={2}>
            {m}
          </Text>
          <Text color="gray.500">{y}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default StatCard;
