import React from 'react';

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-300 text-black hover:bg-black px-3 py-1 rounded-md hover:text-white m-2">
        {name}
      </button>
    </div>
  );
};

export default Button;
