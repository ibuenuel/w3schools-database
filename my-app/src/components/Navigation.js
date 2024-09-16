import React from 'react';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <ul className="flex">
        <li className="mr-6">
          <a href="#" className="text-lg hover:text-blue-600 transition duration-300 ease-in-out">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-lg hover:text-blue-600 transition duration-300 ease-in-out">
            Products
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-lg hover:text-blue-600 transition duration-300 ease-in-out">
            Login
          </a>
        </li>
        <li>
          <a href="#" className="text-lg hover:text-blue-600 transition duration-300 ease-in-out">
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;