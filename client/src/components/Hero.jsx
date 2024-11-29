import React from "react";
import sideImg from "../assets/sideImg.png";
import sideImg1 from "../assets/sideImg1.png";
import sideImg2 from "../assets/sideImg2.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="max-padd-container mt-20 mb-20 xl:mt-10">
      <div className="flex flex-col xl:flex-row-reverse gap-16">
        {/* Left */}
        <div className="flex justify-center flex-1 flex-col gap-y-8 xl:max-w-[555px] relative">
          <h1 className="h1 text-muted">
            Invest in Your <span className="text-secondary"> Future</span>
          </h1>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam molestiae corporis recusandae similique, voluptatibus, tenetur neque voluptatum aspernatur ad impedit doloremque. molestiae corporis recusandae similique, voluptatibus, tenetur neque voluptatum aspernatur ad impedit doloremque. voluptatum aspernatur ad impedit doloremque. molestiae corporis recusandae similique, voluptatibus, tenetur neque voluptatum aspernatur ad impedit doloremque. </p>
          <div className="flex gap-3">
            <a
              href="#listing"
              className="btn-secondary flexCenter rounded-full">
              Explore Properties
            </a>
            <Link
              to={"/create-listing"}
              className="btn-secondary flexCenter rounded-full">
              <span className="medium-20 pr-1">+</span>Add Property
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-1 flex-col gap-4">
          <div className="rounded-2xl h-[266px] overflow-hidden">
            <img
              src={sideImg}
              alt=""
              className="rounded-xl object-cover"
            />
          </div>
          <div className="flexBetween gap-4">
            <div className="flex flex-1 rounded-xl">
              <img
                src={sideImg1}
                alt=""
                height={411}
                width={411}
                className="rounded-xl object-cover aspect-square"
              />
            </div>
            <div className="flex flex-1 rounded-xl bg-gray-10">
              <img
                src={sideImg2}
                alt=""
                height={411}
                width={411}
                className="rounded-xl object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
