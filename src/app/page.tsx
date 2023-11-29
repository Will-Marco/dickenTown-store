import Product from "@/components/Product";
import { ProductType } from "./interfaces";
import Hero from "@/components/Hero";
import Cta from "@/components/CTA";
import Statistics from "@/components/Statistics";

const Home = async () => {
  const products: ProductType[] = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 ">
      <Hero />
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center">SHOP DEALS</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Cta />
      <Statistics />
    </main>
  );
};

export default Home;
