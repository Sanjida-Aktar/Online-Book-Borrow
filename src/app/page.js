import HeroBanner from '@/components/homePage/page';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <HeroBanner></HeroBanner>
    </div>
  );
};

export default page;