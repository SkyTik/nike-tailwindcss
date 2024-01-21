import { offer } from "../assets/images/index.js";
import Button from "../components/Button.jsx";
import { arrowRight } from "../assets/icons/index.js";

const SpecialOffer = () => {
  return (
    <section className="justify-wrap max-container flex items-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1 ">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          fugit itaque officiis ratione voluptatem voluptatum! Aliquam animi
          dignissimos dolorum error, iusto mollitia nam nesciunt, nulla numquam
          possimus quae temporibus unde?
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" icon={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
