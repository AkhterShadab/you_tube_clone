/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 h-76 w-56 shadow-lg">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="Video Image"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
