import { FC } from 'react';
import { Box } from '@chakra-ui/react';

const BurgerIcon: FC = () => {
  return (
    <Box
      aria-label="Toggle Menu"
      width="24px"
      height="24px"
      position="relative"
      onClick={() => console.log('Open')}
      cursor="pointer"
    >
      <Box
        borderRadius={'full'}
        width="100%"
        height="3px"
        bg="white"
        position="absolute"
        top="0"
        left="0"
        transition="transform 0.3s ease"
      />
      <Box
        borderRadius={'full'}
        width="100%"
        height="3px"
        bg="white"
        position="absolute"
        top="calc(50% - 1.5px)"
        left="0"
        transition="opacity 0.3s ease"
      />
      <Box
        borderRadius={'full'}
        width="100%"
        height="3px"
        bg="white"
        position="absolute"
        bottom="0"
        left="0"
        transition="transform 0.3s ease"
      />
    </Box>
  );
};

export default BurgerIcon;
