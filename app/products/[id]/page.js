import Header from "../../../components/header";
import Footer from "../../../components/footer";

import ProductsPage from "@/components/ProductsPage/ProductsPage";

export async function generateMetadata ({params}) {

  return {
    title: params.id[0].toUpperCase() + params.id.slice(1) + " ~ Products",
    description: "It is the products page of shopmayven where you can compare, analyze and find the best products of various brands like Babyganics and cateogories like Diapering, and others according to your values like made in USA, based in New York, Female Founded, Vegan, etc.",
  }
}
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
