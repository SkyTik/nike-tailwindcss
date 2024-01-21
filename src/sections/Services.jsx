import { services } from "../assets/constants/index.js";
import ServiceCard from "../components/ServiceCard.jsx";

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9">
      {services.map((service) => {
        return <ServiceCard key={service.label} {...service} />;
      })}
    </section>
  );
};
export default Services;
