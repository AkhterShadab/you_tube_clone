import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { addMessageToChat } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomNumber, generateMessage } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState('');
  const { messages } = useSelector((store) => store.chat);

  const handleLiveMessage = (e) => {
    dispatch(
      addMessageToChat({
        name: 'user',
        message: liveMessage,
      })
    );
    setLiveMessage('');
    e.preventDefault();
  };
  //   console.log('mess', messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessageToChat({
          name: generateRandomNumber(),
          message: generateMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <div className="ml-1 mr-4 p-2  w-full h-[400px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        className="ml-1 mr-4 p-2 w-full border border-solid"
        onSubmit={(e) => handleLiveMessage(e)}
      >
        <input
          type="text"
          className="mr-4 p-2 w-80 text-black"
          placeholder="Say Something ..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-400">Sent</button>
      </form>
    </div>
  );
};

export default LiveChat;
