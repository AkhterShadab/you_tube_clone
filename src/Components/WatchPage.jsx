import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [params, setParams] = useSearchParams();
  const videoParams = params.get('v');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenu(false));
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex col-span-11 pt-10 pl-20 rounded-3xl ">
        <div>
          <iframe
            width="800"
            height="400"
            src={'https://www.youtube.com/embed/' + videoParams}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
