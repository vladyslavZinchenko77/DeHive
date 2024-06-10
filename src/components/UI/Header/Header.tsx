'use client';
import { FC, CSSProperties } from 'react';
import { Flex, Box, useMediaQuery } from '@chakra-ui/react';
import GradientButton from '@/components/common/GradientButton/GradientButton';
import Logo from '@/components/common/Logo/Logo';
import logoSvg from '../../../../public/svg/logo.svg';
import CustomSelect from '@/components/common/CustomSelect/CustomSelect';
import BurgerIcon from './components/BurgerIcon/BurgerIcon';
import GradientReverseButton from '@/components/common/GradientReverseButton/GradientReverseButton';

interface HeaderProps {
  style?: CSSProperties;
}

const options: string[] = ['one', 'two', 'three'];
const Header: FC<HeaderProps> = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
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
          backgroundColor: '#13141d',
        }}
      >
        <Flex align="center" justify="space-between" p="4">
          {isMobile && <BurgerIcon />}
          <Logo logo={logoSvg} title={'DeHive'} />
          <Flex align="center">
            {!isMobile && (
              <CustomSelect
                marginRight={5}
                options={options}
                onSelectChange={() => console.log('Change')}
              />
            )}

            {isMobile ? (
              <GradientReverseButton>Connect</GradientReverseButton>
            ) : (
              <GradientButton onClick={() => console.log('Connect wallet')}>
                Connect wallet
              </GradientButton>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
