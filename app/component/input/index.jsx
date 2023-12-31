'use client';
import React, { useState } from 'react';

const SectifyInput = ({ title, placeholder, type, name }) => {
  const [viewType, setViewType] = useState(false);

  const handleViewPassword = () => {
    setViewType((prev) => !prev);
  };

  return (
    <label className="block my-3">
      <p className="text-[#4C4C4C]">{title}</p>
      <aside className="relative">
        <input
          type={viewType ? 'text' : type}
          name={name}
          id={name}
          placeholder={placeholder}
          className="border-gray-200 border w-full py-3 px-2 my-2 rounded-md"
        />
        {type === 'password' && (
          <p
            onClick={handleViewPassword}
            className="absolute top-1/2 right-4 w-5 h-5 -translate-y-1/2 text-gray-400 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </p>
        )}
      </aside>
    </label>
  );
};

export default SectifyInput;
