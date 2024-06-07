import { FC, ReactNode, CSSProperties } from 'react';
import { Box } from '@chakra-ui/react';

interface TagProps {
  children: ReactNode;
  style?: CSSProperties;
}

const Tag: FC<TagProps> = ({ children, style, ...rest }) => {
  return (
    <Box
      backgroundColor={'#13141D'}
      border={'1px solid rgb(255,255,255, 0.16)'}
      borderRadius={'full'}
      px={2}
      py={1}
      style={style}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Tag;
