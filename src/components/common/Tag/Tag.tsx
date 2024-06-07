import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface TagProps {
  children: ReactNode;
}

const Tag: FC<TagProps> = ({ children, ...rest }) => {
  return (
    <Box
      borderWidth={'1px'}
      border={'1px solid rgb(255,255,255, 0.16)'}
      borderRadius={'full'}
      px={2}
      py={1}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Tag;
