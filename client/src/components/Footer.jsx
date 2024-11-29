import React from "react";
import { BsEnvelopeFill, BsFacebook, BsGeoAltFill, BsInstagram, BsLinkedin, BsTelephoneFill, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-primary text-cloud-white py-12 mt-16 rounded-t-3xl shadow-cloud-soft  ">
      <div className="max-padd-container grid grid-cols-1 md:grid-cols-3 gap-9 ">
        {/* Company Info */}
        <div>
          <h4 className="text-2xl font-bold mb-4">RentingEasy</h4>
          <p className="text-cloud-white/80">Find your perfect home or investment property with us. We offer a seamless, trusted real estate experience.</p>
          <p className="mt-4 text-cloud-white/80">© 2024 RentingEasy. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p className="text-cloud-white/80 mb-2 flex items-center">
            <BsTelephoneFill className="mr-2" /> +44 7343821994
          </p>
          <p className="text-cloud-white/80 mb-2 flex items-center">
            <BsEnvelopeFill className="mr-2" /> support@rentingeasy.com
          </p>
          <p className="text-cloud-white/80 mb-2 flex items-center">
            <BsGeoAltFill className="mr-2" /> 123 Real Estate Avenue, Suite 100, New York, NY
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-cloud-white/80">
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-300">
              <BsFacebook />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-300">
              <BsTwitterX />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-colors duration-300">
              <BsInstagram />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-300">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-cloud-white/70">
        <p>
          Powered by{" "}
          <a
            href="#"
            className="hover:text-cloud-white transition-colors duration-300">
            RentingEasy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
