import { FC, CSSProperties } from 'react';
import { Button } from '@chakra-ui/react';

interface GradientButtonProps {
  onClick: () => void;
  children: string;
  style?: CSSProperties;
}

const GradientButton: FC<GradientButtonProps> = ({
  onClick,
  children,
  style,
}) => {
  return (
    <Button
      onClick={onClick}
      bgGradient="linear(to-r, pink.500, blue.500)"
      style={style}
      color="white"
      fontSize="16"
      fontWeight="bold"
      borderRadius="full"
      px="42"
      py="18"
      _hover={{
        bgGradient: 'linear(to-r, pink.600, blue.600)',
      }}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
