import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import SvgIcon from '@/components/common/SvgIcon/SvgIcon';

const BtnAddStyled = styled.button`
  background: transparent;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px 16px;
  transition: 0.6s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.16);
    transition: 0.6s;
  }
`;

const BtnAdd: FC = () => {
  return (
    <BtnAddStyled type="button">
      <Flex alignItems={'center'}>
        <Box
          as="span"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgColor="#00FF73"
          borderRadius="full"
          mr={2}
          p={'1px'}
        >
          <SvgIcon type="plus" />
        </Box>
        Add
      </Flex>
    </BtnAddStyled>
  );
};

export default BtnAdd;
