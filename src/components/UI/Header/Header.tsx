import { FC, CSSProperties } from 'react';
import { Flex, Box } from '@chakra-ui/react';
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
  style?: CSSProperties;
}

const Header: FC<HeaderProps> = ({
  title,
  options,
  onSelectChange,
  onButtonClick,
  style,
}) => {
  return (
    <>
      <Box as="header" zIndex={10} borderBottom={'2px solid grey'}>
        <Flex align="center" justify="space-between" p="4" style={style}>
          <Logo logo={logoSvg} title={title} />
          <Flex align="center">
            <CustomSelect
              marginRight={5}
              options={options}
              onSelectChange={onSelectChange}
            />
            <GradientButton onClick={onButtonClick}>
              Connect wallet
            </GradientButton>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
