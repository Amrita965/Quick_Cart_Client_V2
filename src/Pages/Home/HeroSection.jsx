import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/banner-img.gif";

const HeroSection = () => {
  return (
    <section className="card lg:card-side">
      <div className="card-body basis-1/2 justify-center gap-6">
        <h2 className="card-title text-2xl md:text-3xl lg:text-4xl font-semibold">
          Elevate Your Sales Game with Our Powerful POS Application!{" "}
        </h2>
        <p className="text-xl grow-0">
          Discover streamlined transactions, real-time inventory management, and
          actionable insights in one intuitive POS app.
        </p>

        <div className="flex gap-2">
          <Link to="/login" className="btn bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white">
            START SALE
          </Link>
          <Link to="/login" className="btn bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white">
            LOGIN
          </Link>
        </div>
      </div>
      <figure className="basis-1/2">
        <img src={bannerImg} alt="Album" />
      </figure>
    </section>
  );
};

export default HeroSection;
