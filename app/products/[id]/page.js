import Header from "../../../components/header";
import Footer from "../../../components/footer";

import ProductsPage from "@/components/ProductsPage/ProductsPage";

const MainProductsPage = ({ params }) => {
  // console.log(params);
  return (
    <main className="searchpage flex flex-col w-full min-h-screen">
      <Header py="py-6" />
      <ProductsPage params={params} />
      <Footer marginTop="mt-auto" />
    </main>
  );
};

export default MainProductsPage;
