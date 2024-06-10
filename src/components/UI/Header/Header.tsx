import { FC, CSSProperties } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import GradientButton from '@/components/common/GradientButton/GradientButton';
import Logo from '@/components/common/Logo/Logo';
import logoSvg from '../../../../public/svg/logo.svg';
import CustomSelect from '@/components/common/CustomSelect/CustomSelect';

interface HeaderProps {
  style?: CSSProperties;
}

const options: string[] = ['one', 'two', 'three'];
const Header: FC<HeaderProps> = ({ style }) => {
  return (
    <>
      <Box
        as="header"
        zIndex={10}
        borderBottom={'1px solid rgba(255, 255, 255, 0.16)'}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 5,
          backgroundColor: '#1E1E1E',
        }}
      >
        <Flex align="center" justify="space-between" p="4">
          <Logo logo={logoSvg} title={'DeHive'} />
          <Flex align="center">
            <CustomSelect
              marginRight={5}
              options={options}
              onSelectChange={() => console.log('Change')}
            />
            <GradientButton onClick={() => console.log('Connect wallet')}>
              Connect wallet
            </GradientButton>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
