import { star } from "../assets/icons/index.js";

const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex w-full flex-1 flex-col max-sm:w-full">
      <img src={imgURL} alt={name} className="h-[280px] w-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="leading-normald font-montserrat text-xl text-slate-gray">
          (4.5)
        </p>{" "}
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="text-2lx mt-2 font-montserrat font-semibold leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
};
export default ProductCard;
