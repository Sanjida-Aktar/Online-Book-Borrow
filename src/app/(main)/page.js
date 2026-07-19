import HeroBanner from '@/components/homePage/page';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import BooksPage from './books/page';
import FooterPage from '@/components/shared/Footer';

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <HeroBanner></HeroBanner>
      <BooksPage></BooksPage>
      <FooterPage></FooterPage>
    </div>
  );
};

export default page;