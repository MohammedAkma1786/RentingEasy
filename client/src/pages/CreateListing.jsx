import React, { useState } from "react";
import { categories, facilities, types } from "../assets/data";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BiTrash } from "react-icons/bi";
import { IoIosImages } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Header from "../components/Header";

const CreateListing = () => {
  const [photos, setPhotos] = useState([]);
  const [category, setCategory] = useState(""); // Default value set to empty string
  const [type, setType] = useState(""); // Default value set to empty string
  const [amenities, setAmenities] = useState([]); // Default value set to empty array
  const navigate = useNavigate();

  // Default location values
  const [formLocation, setFormLocation] = useState({
    streetAddress: "",
    aptSuite: "",
    city: "",
    province: "",
    country: "",
  });

  const handleChangeLocation = (e) => {
    const { name, value } = e.target;
    setFormLocation({
      ...formLocation,
      [name]: value,
    });
  };

  // Default counts for guests, bedrooms, beds, and bathrooms
  const [guestCount, setGuestCount] = useState(1); // Default value set to 1
  const [bedroomCount, setBedroomCount] = useState(1); // Default value set to 1
  const [bedCount, setBedCount] = useState(1); // Default value set to 1
  const [bathroomCount, setBathroomCount] = useState(1); // Default value set to 1

  // Default description values
  const [formDescription, setFormDescription] = useState({
    title: "",
    description: "",
    price: 0, // Default price is set to 0
  });

  const handleChangeDescription = (e) => {
    const { name, value } = e.target;
    setFormDescription({
      ...formDescription,
      [name]: value,
    });
  };

  const handleUploadPhotos = (e) => {
    const newPhotos = e.target.files;
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleDragPhoto = (result) => {
    if (!result.destination) return;
    const items = Array.from(photos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPhotos(items);
  };

  const handleRemovePhoto = (indexToRemove) => {
    setPhotos((prevPhotos) =>
      prevPhotos.filter((_, index) => index !== indexToRemove)
    );
  };

  const creatorId = useSelector((state) => state.user._id);
  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const listingForm = new FormData();
      listingForm.append("creator", creatorId);
      listingForm.append("category", category);
      listingForm.append("type", type);
      listingForm.append("streetAddress", formLocation.streetAddress);
      listingForm.append("aptSuite", formLocation.aptSuite);
      listingForm.append("city", formLocation.city);
      listingForm.append("province", formLocation.province);
      listingForm.append("country", formLocation.country);
      listingForm.append("guestCount", guestCount);
      listingForm.append("bedroomCount", bedroomCount);
      listingForm.append("bedCount", bedCount);
      listingForm.append("bathroomCount", bathroomCount);
      listingForm.append("amenities", amenities);
      listingForm.append("title", formDescription.title);
      listingForm.append("description", formDescription.description);
      listingForm.append("price", formDescription.price);

      // Append each selected photos to the FormData object
      photos.forEach((photo) => {
        listingForm.append("listingPhotos", photo);
      });

      // Send a POST request to server
      const response = await fetch("http://localhost:4000/listing/create", {
        method: "POST",
        body: listingForm,
      });

      if (response.ok) {
        navigate("/");
      }
    } catch (err) {
      console.log("Publish Listing Failed", err.message);
    }
  };

  return (
    <>
      <Header />
      <section className="max-padd-container py-10 text-secondary">
        <h3 className="h3 text-secondary">Add a Property</h3>
        <form onSubmit={handlePost} className="mt-10">
          <h4 className="h4 my-4 text-secondary">Describe your Property?</h4>
          <div className="hide-scrollbar flex gap-x-1 bg-white ring-1 ring-slate-400/5 shadow-sm rounded-full px-2 py-3 overflow-x-auto mb-8">
            {categories.map((item) => (
              <div
                key={item.label}
                onClick={() => setCategory(item.label)}
                className="flexCenter flex-col gap-2 p-2 rounded-xl cursor-pointer min-w-24 xl:min-w-32"
                style={{ flexShrink: 0 }} // Prevent shrinking
              >
                <div
                  className="text-primary rounded-full h-10 w-10 p-2 flexCenter text-lg"
                  style={{ backgroundColor: `${item.color}` }}
                >
                  {item.icon}
                </div>
                <p
                  className={`${
                    category === item.label ? "text-sun-yellow" : ""
                  } medium-14`}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          {/* container Types and Loacations */}
          <div className="flex flex-col xl:flex-row gap-x-16 bg-muted">
            <div className="flex-1">
              <h4 className="h4 my-4 pl-4">What is the type of your place?</h4>
              <div className="flex flex-col gap-y-3 mb-6 pl-4">
                {types.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => setType(item.name)}
                    className={`${
                      type === item.name
                        ? "ring-2 ring-slate-950 bg-white"
                        : "ring-2 ring-white"
                    } flexBetween max-w-[777px] rounded-xl px-4 py-1 bg-secondary`}
                  >
                    <div>
                      <h5 className="h5">{item.name}</h5>
                      <p>{item.description}</p>
                    </div>
                    <div className="text-2xl text-primary ">{item.icon}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 mb-4">
              <h4 className="h4 my-4">What's the address of your place??</h4>
              <div>
                <div>
                  <h5 className="h5">Street Address:</h5>
                  <input
                    onChange={handleChangeLocation}
                    value={formLocation.streetAddress}
                    type="text"
                    name="streetAddress"
                    placeholder="Street"
                    required
                    className="bg-white text-black p-2 text-sm outline-none border-none mb-2 rounded"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-1/2">
                  <h5 className="h5">Apartment, Suite (opt):</h5>
                  <input
                    onChange={handleChangeLocation}
                    value={formLocation.aptSuite}
                    type="text"
                    name="aptSuite"
                    placeholder="Apt, Suite"
                    required
                    className="bg-white text-black p-2 text-sm outline-none border-none mb-2 rounded"
                  />
                </div>
                <div className="w-1/2">
                  <h5 className="h5">City:</h5>
                  <input
                    onChange={handleChangeLocation}
                    value={formLocation.city}
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    className="bg-white text-black p-2 text-sm outline-none border-none mb-2 rounded"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-1/2">
                  <h5 className="h5">Province:</h5>
                  <input
                    onChange={handleChangeLocation}
                    value={formLocation.province}
                    type="text"
                    name="province"
                    placeholder="Province"
                    required
                    className="bg-white text-black p-2 text-sm outline-none border-none mb-2 rounded"
                  />
                </div>
                <div className="w-1/2">
                  <h5 className="h5">Country:</h5>
                  <input
                    onChange={handleChangeLocation}
                    value={formLocation.country}
                    type="text"
                    name="country"
                    placeholder="Country"
                    required
                    className="bg-white text-black p-2 text-sm outline-none border-none mb-2 rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Essential details section remains unchanged */}
          <h4 className="h4 my-4 text-white mt-10">
            Provide some essential details about your place?
          </h4>

          {/* Amenities */}
          {/* Image Upload */}
          {/* Title, Description, Price */}
          <button className="btn-secondary rounded-full" type="submit">
            Create Property
          </button>
        </form>
      </section>
    </>
  );
};

export default CreateListing;
