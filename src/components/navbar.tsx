import React from 'react';
import Image from 'next/image';

export const NavBar: React.FC = () => {
  return (
    <div className=" px-10 py-3 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" height={20} width={30} />
          <div className="font-semibold text-xl text-gray-800">Plantera</div>
        </div>

        {/* Menu Items */}
        <div
          className="flex space-x-6 text-sm text-plant-nav-text  "
          // style={{ color: 'var(--plant-nav-text)' }} // Directly using the CSS variable
        >
          <div className="hover:text-gray-500 cursor-pointer">Home</div>
          <div className="hover:text-gray-500 cursor-pointer">About</div>
          <div className="hover:text-gray-500 cursor-pointer">Products</div>
          <div className="hover:text-gray-500 cursor-pointer">Contact</div>
        </div>
      </div>
    </div>
  );
};
