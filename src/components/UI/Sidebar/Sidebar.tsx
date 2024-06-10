'use client';
import { Box, Link, Tooltip } from '@chakra-ui/react';
import React, { FC, CSSProperties } from 'react';
import SvgIcon from '@/components/common/SvgIcon/SvgIcon';

interface SidebarProps {
  style: CSSProperties;
}

const Sidebar: FC<SidebarProps> = ({ style }) => {
  return (
    <Box
      as="nav"
      width={'212px'}
      backgroundColor={'#13141D'}
      height={'calc(100vh - 76px)'}
      style={style}
      display={'flex'}
      justifyContent={'center'}
    >
      <Tooltip
        label={'Dashboard'}
        placement="auto-start"
        bg="#13141D"
        color="white"
        borderRadius="24px 24px 24px 0"
        border={'1px solid rgba(255, 255, 255, 0.16)'}
        padding="8px 12px"
        fontSize="14px"
        boxShadow="md"
        arrowSize={10}
      >
        <Link marginTop={'40px'}>
          <SvgIcon type="dashboard" />
        </Link>
      </Tooltip>
    </Box>
  );
};

export default Sidebar;
