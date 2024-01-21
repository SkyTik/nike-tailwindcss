import { products } from "../assets/constants/index.js";
import ProductCard from "../components/ProductCard.jsx";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="max-w-lg:mt-2 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex explicabo
          neque qui! At corporis cum delectus dolore ducimus enim ex expedita,
          fugit illum mollitia nostrum quo tempore unde velit veniam.
        </p>
      </div>
      <div className="grid-cols-1d mt-16 grid gap-14 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
