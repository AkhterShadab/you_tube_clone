/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="my-2 flex shadow-sm">
      <img
        alt="user image"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        className="w-6 h-6"
      />
      <div className="flex">
        <p className="font-bold px-2">{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
