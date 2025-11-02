import React, { useEffect, useState } from 'react';
import { youTubeAPI } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      setLoading(true);
      const data = await fetch(youTubeAPI);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return null;
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={'/watch?v=' + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
