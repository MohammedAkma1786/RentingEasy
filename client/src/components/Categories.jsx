import React from "react";
import { categories } from "../assets/data";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="max-padd-container py-16 xl:py-28 bg-background">
      <div className="max-w-[666px] mb-12">
        <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Explore Top Categories</h3>
        <p className="text-muted">Discover a variety of properties that cater to all your needs. Whether you're looking for a cozy apartment or a spacious house, we have something for everyone.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories?.slice(0, 8).map((category) => (
          <Link
            to={`/listing/category/${category.label}`}
            key={category.label}
            className="relative shadow-cloud-soft rounded-xl overflow-hidden">
            <img
              src={category.img}
              alt={category.label}
              className="aspect-square object-cover h-[211px] w-full transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-light-blue/30 z-0" />
            <div className="flexCenter flex-col h-full w-full absolute top-0 left-0 text-cloud-white">
              <div className="text-4xl">{category.icon}</div>
              <div className="text-lg font-bold">{category.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
