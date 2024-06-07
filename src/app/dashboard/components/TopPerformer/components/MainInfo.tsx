import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import SvgIcon from '@/components/common/SvgIcon/SvgIcon';
import Tag from '@/components/common/Tag/Tag';

const MainInfo: FC = () => {
  return (
    <Box>
      <Box display={'flex'}>
        <Text as={'p'} fontSize={24}>
          DHV / QUICK
        </Text>
        <SvgIcon type="question" style={{ marginLeft: 8 }} />
      </Box>

      <Box display={'flex'} gap={1} marginTop={2}>
        <Tag>
          <Text fontSize={'12px'}>QuickSwap</Text>
        </Tag>
        <Tag>
          <Text fontSize={'12px'}>Volatility:Very Low</Text>
        </Tag>
        <Tag>
          <Text fontSize={'12px'}>Risk:Very High</Text>
        </Tag>
      </Box>
      <Text as={'p'} marginTop={5} fontSize={'18px'}>
        Your rewards:
      </Text>
      <Flex alignItems={'center'} marginTop={1}>
        <Text as={'p'} fontSize={'32px'} color={'#00FF73'}>
          $10,678.12
        </Text>
        <Tag>
          <Flex>
            <SvgIcon type="spiral" />
            <SvgIcon type="helm" />
            <SvgIcon type="scale" />
          </Flex>
        </Tag>
      </Flex>
      <Text fontSize={'16px'} color={'gray'}>
        Accumulated rewards
      </Text>
    </Box>
  );
};

export default MainInfo;
