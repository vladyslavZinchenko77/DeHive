import React, { FC, CSSProperties } from 'react';
import styled from '@emotion/styled';

interface GradientReverseButtonProps {
  children: React.ReactNode;
  style?: CSSProperties;
}

const ButtonWrapper = styled.button<GradientReverseButtonProps>`
  border: none;
  display: inline-block;
  border-radius: 99px;
  color: white;
  position: relative;
  z-index: 1;
  font-size: 16px;
  padding: 10px 20px;
  font-weight: 100;
  text-transform: capitalize;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    border-radius: 99px;
  }

  &:before {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -2;
    background: linear-gradient(34.42deg, rgb(65, 183, 255), rgb(0, 255, 115));
  }

  &:after {
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    background-color: black;
    z-index: -1;
    opacity: 1;
    transition: all 0.6s ease-in-out;
  }

  &:hover:after {
    opacity: 0;
  }
`;

const GreenBorderBtn: FC<GradientReverseButtonProps> = ({
  children,
  style,
}) => {
  return (
    <ButtonWrapper type="button" style={style}>
      {children}
    </ButtonWrapper>
  );
};

export default GreenBorderBtn;
