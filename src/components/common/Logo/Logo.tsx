import { FC } from 'react';
import { Flex, Text, Link, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';

interface LogoProps {
  logo: string;
  title: string;
}

const Logo: FC<LogoProps> = ({ logo, title }) => {
  const [isMobile] = useMediaQuery('(max-width: 1279px)');

  return (
    <Link>
      <Flex direction={isMobile ? 'column' : 'row'} align="center">
        <Image loading="lazy" src={logo} alt={title} width="40" height="40" />
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
