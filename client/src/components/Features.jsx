import React from "react";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";

const Features = () => {
  return (
    <section className="max-padd-container py-8  xl:py-32 bg-background">
      {/* Title */}
      <div className="text-center pb-16">
        <h6 className="text-sun-yellow font-bold uppercase">Few steps to Your New Home</h6>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">This Is How Easy It Can Be</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-cloud-white p-6 rounded-3xl shadow-sun-glow">
          <MdOutlineQuestionAnswer className="text-secondary-dark mb-3 text-4xl" />
          <h4 className="text-2xl font-bold text-primary mb-2">Answer Questions</h4>
          <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe doloremque quisquam, magni autem temporibus inventore.</p>
        </div>
        <div className="bg-cloud-white p-6 rounded-3xl shadow-sun-glow">
          <BiSelectMultiple className="text-secondary-dark mb-3 text-4xl" />
          <h4 className="text-2xl font-bold text-primary mb-2">Select Property</h4>
          <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe doloremque quisquam, magni autem temporibus inventore.</p>
        </div>
        <div className="bg-cloud-white p-6 rounded-3xl shadow-sun-glow">
          <GrCertificate className="text-secondary-dark mb-3 text-4xl" />
          <h4 className="text-2xl font-bold text-primary mb-2">Enjoy Living</h4>
          <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe doloremque quisquam, magni autem temporibus inventore.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
