import { FC } from 'react';

import Image from 'next/image';

import ethereumSvg from '../../../../public/svg/ethereum.svg';
import polyGamingSvg from '../../../../public/svg/poly-game.svg';
import polyClusterSvg from '../../../../public/svg/poly-cluster.svg';
import wmaticWthSvg from '../../../../public/svg/wmatic-wth.svg';

export type IconType = 'ethereum' | 'polyGaming' | 'polyCluster' | 'wmaticWth';

const SvgIcon: FC<{
  type: IconType;
  height?: number;
  width?: number;
  onClick?: () => void;
}> = ({ type, height, width, onClick }) => {
  const source = {
    ethereum: ethereumSvg,
    polyGaming: polyGamingSvg,
    polyCluster: polyClusterSvg,
    wmaticWth: wmaticWthSvg,
  }[type];

  return (
    <Image
      loading="lazy"
      src={source}
      height={height}
      width={width}
      alt={type}
    />
  );
};

export default SvgIcon;
