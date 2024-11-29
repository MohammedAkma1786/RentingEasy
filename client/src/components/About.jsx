import { BsCheck2Circle } from "react-icons/bs";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <section className="max-padd-container py-16 xl:py-28 bg-background">
      <div className="flex flex-col xl:flex-row-reverse gap-10 items-center">
        {/* Left */}
        <div className="flex-1">
          <img
            src={aboutImg}
            alt=""
            className="w-auto rounded-xl shadow-sun-glow h-auto "
          />
        </div>
        {/* Right */}
        <div className="flex-1 flex flex-col justify-center bg-cloud-white p-6 rounded-xl shadow-cloud-soft">
          {/* Title */}
          <div className="pb-4">
            <h6 className="text-sun-yellow font-bold uppercase">Few steps to Your New Home</h6>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">This Is How Easy It Can Be</h2>
          </div>
          <ul className="list-disc pl-5 space-y-4 text-text">
            <li className="flex items-center gap-x-3">
              <BsCheck2Circle className="text-secondary-dark" /> Access exclusive property listings
            </li>
            <li className="flex items-center gap-x-3">
              <BsCheck2Circle className="text-secondary-dark" /> Expert advice from local real estate professionals
            </li>
            <li className="flex items-center gap-x-3">
              <BsCheck2Circle className="text-secondary-dark" /> Find your dream home in prime locations
            </li>
            <li className="flex items-center gap-x-3">
              <BsCheck2Circle className="text-secondary-dark" /> Seamless online property search experience
            </li>
            <li className="flex items-center gap-x-3">
              <BsCheck2Circle className="text-secondary-dark" /> Get personalized property recommendations
            </li>
            <li className="flex items-center gap-x-3">
              <BsCheck2Circle className="text-secondary-dark" /> Transparent and hassle-free transactions
            </li>
            <li className="flex items-center gap-x-3">
              <BsCheck2Circle className="text-secondary-dark" /> 24/7 customer support for all your inquiries
            </li>
            <li className="flex items-center gap-x-3">
              <BsCheck2Circle className="text-secondary-dark" /> Comprehensive market analysis and reports
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
