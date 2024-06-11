import { FC } from 'react';
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import SvgIcon from '@/components/common/SvgIcon/SvgIcon';
import Tag from '@/components/common/Tag/Tag';
import GreenBorderBtn from '@/components/common/GreenBorderBtn/GreenBorderBtn';

const MainInfo: FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 1279px)');
  const [isTablet] = useMediaQuery('(max-width: 1500px)');

  return (
    <Box width={isMobile ? '100%' : ''}>
      <Box
        display={'flex'}
        justifyContent={isMobile ? 'center' : ''}
        width={isMobile ? '100%' : ''}
      >
        <Text as={'p'} fontSize={24}>
          DHV / QUICK
        </Text>
        <SvgIcon type="question" style={{ marginLeft: 8 }} />
        <SvgIcon type="get" style={{ marginLeft: 8 }} />
      </Box>

      <Box
        width={isMobile ? '100%' : ''}
        display={'flex'}
        justifyContent={isMobile ? 'space-between' : ''}
        gap={isMobile ? '2px' : '4px'}
        marginTop={2}
      >
        <Tag>
          <Text fontSize={isMobile ? '10px' : '12px'}>QuickSwap</Text>
        </Tag>
        <Tag>
          <Text fontSize={isMobile ? '10px' : '12px'}>
            Volatility:
            <Box as="span" marginLeft={1} color={'#00FF73'}>
              {isTablet ? 'Low' : 'Very Low'}
            </Box>
          </Text>
        </Tag>
        <Tag>
          <Text fontSize={isMobile ? '10px' : '12px'}>
            Risk:
            <Box as="span" marginLeft={1} color={'#FC4E7E'}>
              {isTablet ? 'High' : 'Very High'}
            </Box>
          </Text>
        </Tag>
      </Box>
      <Text as={'p'} marginTop={5} fontSize={'18px'}>
        Your rewards:
      </Text>

      <Flex
        alignItems={'center'}
        marginTop={1}
        justifyContent={isMobile ? 'space-between' : ''}
        width={isMobile ? '100%' : ''}
      >
        <Text as={'p'} fontSize={isMobile ? '20px' : '32px'} color={'#00FF73'}>
          $10,678.12
        </Text>
        {isMobile && (
          <GreenBorderBtn style={{ fontSize: 12, marginLeft: 4 }}>
            Claim rewards
          </GreenBorderBtn>
        )}
        {!isMobile && (
          <Tag style={{ marginLeft: 1 }}>
            <Flex gap={2}>
              <SvgIcon type="spiral" />
              <SvgIcon type="helm" />
              <SvgIcon type="scale" />
            </Flex>
          </Tag>
        )}
      </Flex>

      <Text fontSize={'16px'} color={'gray'}>
        Accumulated rewards
      </Text>
    </Box>
  );
};

export default MainInfo;
