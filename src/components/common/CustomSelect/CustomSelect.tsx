import React from 'react';
import { Select } from '@chakra-ui/react';
import styled from '@emotion/styled';

const CustomSelect = styled(Select)`
  background-color: #000;
  color: #00bfff;
  border: 2px solid #00bfff;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
  }
`;

const CustomOption = styled.option`
  background-color: #000;
  color: #00bfff;
`;

const PolygonSelect: React.FC = () => {
  const options = ['Aug 08', 'Aug 09', 'Aug 07', 'Aug 06', 'Aug 10'];

  return (
    <CustomSelect>
      {options.map((option) => (
        <CustomOption key={option} value={option}>
          {option}
        </CustomOption>
      ))}
    </CustomSelect>
  );
};

export default PolygonSelect;
