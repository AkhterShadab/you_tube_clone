import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const listOfButtons = ['All', 'Music', 'Live', 'News', 'Podcasts', 'Mixes', 'Action'];
  return (
    <div className="flex flex-row">
      {listOfButtons.map((button) => (
        <Button name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
