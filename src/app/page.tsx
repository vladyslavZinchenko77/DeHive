'use client';
import Header from '@/components/UI/Header/Header';
import logoSvg from '../../public/svg/logo.svg';

export default function Page() {
  return (
    <>
      <Header
        logo={logoSvg}
        title="DeHive"
        onButtonClick={() => {
          console.log('click');
        }}
        onSelectChange={() => {
          console.log('change');
        }}
        options={['one', 'two', 'three']}
      />
    </>
  );
}
