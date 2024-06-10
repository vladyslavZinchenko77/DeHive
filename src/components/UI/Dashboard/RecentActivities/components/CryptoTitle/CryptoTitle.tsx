import React, { FC } from 'react';
import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';

interface CryptoTitleProps {
  src: string;
  alt: string;
  title: string;
  volume: string;
}

const CryptoTitle: FC<CryptoTitleProps> = ({ src, alt, title, volume }) => {
  return (
    <Flex alignItems="center">
      <Image src={src} alt={alt} width={19} height={20} />
      <Box ml="3">
        <Heading as="h2" fontSize="16px" textTransform="uppercase">
          {title}
        </Heading>
        <Text fontSize="14px" color="#4E4F56">
          {volume}
        </Text>
      </Box>
    </Flex>
  );
};

export default CryptoTitle;
