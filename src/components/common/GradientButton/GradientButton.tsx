import { FC, CSSProperties } from 'react';
import { Button } from '@chakra-ui/react';

interface GradientButtonProps {
  onClick: () => void;
  children: string;
  style?: CSSProperties;
  border?: string;
  bgGradient?: string;
}

const GradientButton: FC<GradientButtonProps> = ({
  onClick,
  children,
  style,
  border = 'none',
  bgGradient = 'radial-gradient(68.45% 126.09% at 3.97% 85.62%, #ff6f4f 0, rgba(255, 1, 221, 0) 100%), radial-gradient(97.47% 137.91% at 21.03% 100%, #ff01dd 0, rgba(92, 92, 255, 0) 100%), radial-gradient(89.49% 70.67% at 17.26% 0, #5c5cff 0, rgba(92, 92, 255, 0) 100%), radial-gradient(45.63% 104.97% at 95.63% 19.37%, #14e1e2 0, rgba(30, 208, 244, .0001) 100%), #41b7ff',
}) => {
  return (
    <Button
      onClick={onClick}
      bgGradient={bgGradient}
      style={style}
      color="white"
      fontSize="16"
      fontWeight="bold"
      borderRadius="full"
      border={border}
      px="42"
      py="18"
      transition={'0.2s'}
      _hover={{
        bgGradient: 'linear(to-r, pink.600, blue.600)',
        transition: '0.2s',
      }}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
