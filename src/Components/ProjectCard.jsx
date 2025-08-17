import React from "react";
import { Link } from "react-router-dom";

function ProjectCard() {
  const items = [
    {
      image: "Project2.png",
      title: "My Feedback Project",
      about: "This project is about booking restaurants and Businesses.",
      link: "https://myfeedbax.netlify.app/",
    },
    {
      image: "blood.png",
      title: "Blood Donation Project",
      about: "This project is about Blood Donation",
      link: "https://giftoflife.netlify.app/",
    },
    {
      image: "Project4.png",
      title: "Wern Finance Project",
      about: "This project is about Debit and Credit card.",
      link: "https://xenxie-finance.netlify.app/",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 py-3">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          target="_blank"
          className="hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-tertiary dark:bg-ground rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[400px] sm:h-[450px]">
            {/* Image section */}
            <div className="overflow-hidden h-2/3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text section */}
            <div className="p-4 flex flex-col justify-between h-1/4">
              <h1 className="text-lg font-bold font-poppins text-ground dark:text-tertiary text-center mb-2">
                {item.title}
              </h1>
              <p className="text-sm font-outfit text-ground dark:text-default text-center">
                {item.about}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectCard;
