import React from "react";
function Card({ description, imgSrc, name, role }) {
    return (
      <div className="w-full mx-0 flex-shrink-0">
        <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B]  h-full flex flex-col justify-between shadow-lg">
          <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
            {description}
          </p>
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-3"
              src={imgSrc}
              alt={`Profile image of ${name}`}
            />
            <div>
              <p className="text-base font-medium text-white">{name}</p>
              <p className="text-sm text-gray-400">{role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } 
  
  export default Card;
  