"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export const Activities = () => {
  const listVariants = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700 underline">
          Our Activities
        </h1>
        <ul className="space-y-4 text-lg text-gray-700">
          {[
            { text: "🎉 Inauguration", border: "border-blue-500", heading: "inaugration" },
            { text: "📅 Various Programmes", border: "border-green-500", heading: "programs" },
            { text: "🏛 VIP Visits", border: "border-red-500", heading: "vip" },
            { text: "🎓 Student Activities", border: "border-yellow-500", heading: "activities" },
            { text: "🏫 School Campus", border: "border-purple-500", heading: "campus" },
            { text: "🎽 Uniform", border: "border-indigo-500", heading: "uniform" },
            { text: "👨‍👩‍👧‍👦 Our Parents", border: "border-pink-500", heading: "parents" },
            { text: "💬 Comments by Visitors", border: "border-teal-500", heading: "visitors" },
          ].map((item, index) => (
            <Link key={index} href={`/our-activities/${item.heading}`} passHref>
              <motion.li
                variants={listVariants}
                whileHover="hover"
                className={`border-l-4 pl-4 ${item.border} cursor-pointer`}
              >
                {item.text}
              </motion.li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
