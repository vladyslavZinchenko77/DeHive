import { Box, Link } from '@chakra-ui/react';
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
    >
      <Link>
        <SvgIcon type="dashboard" />
      </Link>
    </Box>
  );
};

export default Sidebar;
