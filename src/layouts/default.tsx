import Navbar from '@/components/navbar';
import React from 'react';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="max-w-[60%] mx-auto my-16 flex flex-row h-screen border-2 border-black shadow-custom-page rounded-xl bg-white">
      <div className="h-full w-[5%] bg-black" />
      <div className="flex flex-col w-full">
        <Navbar/>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
