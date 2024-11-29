import React from "react";

const Loader = () => {
  return (
    <div className="flexCenter h-screen w-full bg-background">
      <div className="w-24 h-24 border-4 border-t-transparent border-primary rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
