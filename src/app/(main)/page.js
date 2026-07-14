import HeroBanner from '@/components/homePage/page';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import BooksPage from './books/page';

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <HeroBanner></HeroBanner>
      <BooksPage></BooksPage>
    </div>
  );
};

export default page;