import { Select, SelectProps } from '@chakra-ui/react';
import { FC } from 'react';

interface CustomSelectProps extends SelectProps {
  options: string[];
  onSelectChange: (value: string) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  onSelectChange,
  ...props
}) => {
  return (
    <Select
      {...props}
      onChange={(e) => onSelectChange(e.target.value)}
      sx={{
        borderColor: '#41B7FF',
        _hover: {
          borderColor: '#41B7FF',
        },
        _focus: {
          borderColor: '#41B7FF',
          boxShadow: '0 0 0 1px #41B7FF',
        },
        _active: {
          borderColor: '#41B7FF',
        },
        borderRadius: 'full',
        fontSize: '18px',

        px: 4,
        cursor: 'pointer',
      }}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
      ы
    </Select>
  );
};

export default CustomSelect;
