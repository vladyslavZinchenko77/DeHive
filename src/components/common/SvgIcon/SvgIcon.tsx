import { FC, CSSProperties } from 'react';

import Image from 'next/image';

import ethereumSvg from '../../../../public/svg/ethereum.svg';
import polyGamingSvg from '../../../../public/svg/poly-game.svg';
import polyClusterSvg from '../../../../public/svg/poly-cluster.svg';
import wmaticWthSvg from '../../../../public/svg/wmatic-wth.svg';
import topSvg from '../../../../public/svg/top.svg';
import questionSvg from '../../../../public/svg/question.svg';
import spiralSvg from '../../../../public/svg/spiral.svg';
import helmSvg from '../../../../public/svg/helm.svg';
import scaleSvg from '../../../../public/svg/scale.svg';
import impulseSvg from '../../../../public/svg/impulse.svg';
import dashboardSvg from '../../../../public/svg/dashboard.svg';
import getSvg from '../../../../public/svg/GET.svg';
import plusSvg from '../../../../public/svg/plus.svg';
import logoSvg from '../../../../public/svg/logo.svg';

export type IconType =
  | 'ethereum'
  | 'polyGaming'
  | 'polyCluster'
  | 'wmaticWth'
  | 'top'
  | 'question'
  | 'spiral'
  | 'helm'
  | 'scale'
  | 'impulse'
  | 'dashboard'
  | 'get'
  | 'plus'
  | 'logo';

const SvgIcon: FC<{
  type: IconType;
  height?: number;
  width?: number;
  onClick?: () => void;
  style?: CSSProperties;
}> = ({ type, height, width, onClick, style }) => {
  const source = {
    ethereum: ethereumSvg,
    polyGaming: polyGamingSvg,
    polyCluster: polyClusterSvg,
    wmaticWth: wmaticWthSvg,
    top: topSvg,
    question: questionSvg,
    spiral: spiralSvg,
    helm: helmSvg,
    scale: scaleSvg,
    impulse: impulseSvg,
    dashboard: dashboardSvg,
    get: getSvg,
    plus: plusSvg,
    logo: logoSvg,
  }[type];

  return (
    <Image
      loading="lazy"
      src={source}
      height={height}
      width={width}
      alt={type}
      style={style}
    />
  );
};

export default SvgIcon;
