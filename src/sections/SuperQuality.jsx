import Button from "../components/Button.jsx";
import { arrowRight } from "../assets/icons/index.js";
import { shoe8 } from "../assets/images/index.js";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red">Super Quality </span>
          Shoes
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
        <div className="mt-11">
          <Button label="View Detail" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img
          src={shoe8}
          alt="Super Quality Shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};
export default SuperQuality;
