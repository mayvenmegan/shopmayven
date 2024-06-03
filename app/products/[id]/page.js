

import Header from '../../../components/header';
import Footer from '../../../components/footer';



import ProductsPage from '@/components/ProductsPage/ProductsPage';

const MainSearchPage = ({params}) => {
  // console.log(params);


  return (

      <main className='searchpage'>
        <Header py='py-6' />
          <ProductsPage params={params} />
        <Footer marginTop={'mt-auto'} />
      </main>

  );
};

export default MainSearchPage;


