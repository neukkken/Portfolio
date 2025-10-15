import BackgroundMoon from '@/components/background-moon';
import React from 'react';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div>
      <BackgroundMoon />
      <div className='flex flex-col items-center justify-start w-full h-screen overflow-auto'>
        {children}
      </div>
    </div>
  );
}
