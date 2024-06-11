import { FC } from 'react';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';

interface GradientButtonProps {
  onClick: () => void;
  children: string;
  style?: React.CSSProperties;
}

const StyledButton = styled(Button)`
  background: radial-gradient(
      68.45% 126.09% at 3.97% 85.62%,
      #ff6f4f 0,
      rgba(255, 1, 221, 0) 100%
    ),
    radial-gradient(
      97.47% 137.91% at 21.03% 100%,
      #ff01dd 0,
      rgba(92, 92, 255, 0) 100%
    ),
    radial-gradient(
      89.49% 70.67% at 17.26% 0,
      #5c5cff 0,
      rgba(92, 92, 255, 0) 100%
    ),
    radial-gradient(
      45.63% 104.97% at 95.63% 19.37%,
      #14e1e2 0,
      rgba(30, 208, 244, 0.0001) 100%
    ),
    #41b7ff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 24px;
  border: none;
  transition: 0.6s;
  padding: 18px 42px;

  &:hover {
    background: linear-gradient(to right, #d53f8c, #805ad5);
    transition: 0.6s;
  }
`;

const GradientButton: FC<GradientButtonProps> = ({
  onClick,
  children,
  style,
}) => {
  return (
    <StyledButton type="button" onClick={onClick} style={style}>
      {children}
    </StyledButton>
  );
};

export default GradientButton;
