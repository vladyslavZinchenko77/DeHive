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
    background: #503b9a;
    background: -moz-linear-gradient(left, #503b9a 0%, #269cc1 100%);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0%, #503b9a),
      color-stop(100%, #269cc1)
    );
    background: -webkit-linear-gradient(left, #503b9a 0%, #269cc1 100%);
    background: -o-linear-gradient(left, #503b9a 0%, #269cc1 100%);
    background: -ms-linear-gradient(left, #503b9a 0%, #269cc1 100%);
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
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#503b9a', endColorstr='#269cc1', GradientType=1);
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

const GradientReverseButton: FC<GradientReverseButtonProps> = ({
  children,
  style,
}) => {
  return <ButtonWrapper style={style}>{children}</ButtonWrapper>;
};

export default GradientReverseButton;
