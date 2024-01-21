import { reviews } from "../assets/constants/index.js";
import ReviewCard from "../components/ReviewCard.jsx";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What Out <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
        laboriosam, sunt? At dolorum eaque enim maxime, mollitia natus neque
        quam quos rerum veritatis. Ex fuga illum maxime officiis, quia
        veritatis.
      </p>

      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};
export default CustomerReview;
