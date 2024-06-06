import { FC } from 'react';
import { Box, Flex, Select } from '@chakra-ui/react';
import GradientButton from '@/components/common/GradientButton/GradientButton';
import Logo from '@/components/common/Logo/Logo';
import logoSvg from '../../../../public/svg/logo.svg';
import CustomSelect from '@/components/common/CustomSelect/CustomSelect';

interface HeaderProps {
  logo: string;
  title: string;
  options: string[];
  onSelectChange: (value: string) => void;
  onButtonClick: () => void;
}

const Header: FC<HeaderProps> = ({
  logo,
  title,
  options,
  onSelectChange,
  onButtonClick,
}) => {
  return (
    <Flex align="center" justify="space-between" p="4">
      <Logo logo={logoSvg} title={title} />
      <Flex align="center">
        <CustomSelect
          marginRight={5}
          options={options}
          onSelectChange={onSelectChange}
        />
        <GradientButton onClick={onButtonClick}>Connect wallet</GradientButton>
      </Flex>
    </Flex>
  );
};

export default Header;
