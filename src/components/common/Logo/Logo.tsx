import { FC } from 'react';
import { Flex, Text, Link, useMediaQuery } from '@chakra-ui/react';
import SvgIcon from '../SvgIcon/SvgIcon';

interface LogoProps {
  logo: string;
  title: string;
}

const Logo: FC<LogoProps> = ({ logo, title }) => {
  const [isMobile] = useMediaQuery('(max-width: 1279px)');

  return (
    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
      <Flex direction={isMobile ? 'column' : 'row'} align="center">
        <SvgIcon type="logo" />
        <Text
          ml={isMobile ? 0 : 4}
          mt={isMobile ? 1 : 0}
          fontSize="xl"
          fontWeight="bold"
        >
          {title}
        </Text>
      </Flex>
    </Link>
  );
};

export default Logo;
