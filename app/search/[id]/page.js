

import Header from '../../../components/header';
import Footer from '../../../components/footer';



import SearchPage from '@/components/SearchPage/SearchPage';

const MainSearchPage = ({params}) => {
  // console.log(params);


  return (

      <main className='searchpage'>
        <Header py='py-6' />
          <SearchPage params={params} />
        <Footer marginTop={'mt-auto'} />
      </main>

  );
};

export default MainSearchPage;


