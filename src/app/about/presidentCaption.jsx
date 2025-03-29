import React from "react";

const PresidentCaption = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">President Photo Caption</h1>
        <p className="text-lg text-gray-800">
          A unique honour—a moment of pride. Our students had a unique honour to
          meet and receive blessings from the most respected President of India,
          <span className="font-semibold"> Smt. Droupadi Murmu Ji</span>, in Rashtrapati Bhawan.
          We have the distinction of empowering India's most primitive and vulnerable
          tribal students from <span className="font-semibold">Van Raji</span>, <span className="font-semibold">Buxa</span>,
          and other communities.
        </p>
      </div>
    </div>
  );
};

export default PresidentCaption;
