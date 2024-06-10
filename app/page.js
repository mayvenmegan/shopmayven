'use client';

import Header from '../components/header';
import Footer from '../components/footer';
import HomePage from '@/components/HomePage/HomePage';

export default function Home() {

  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      <HomePage />
      <Footer marginTop={'mt-auto'}/>

    </main>
    
  );
}
