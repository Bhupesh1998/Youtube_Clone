import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO } from "../utils/contants";
import VideoCard from "./VideoCard";

function Videocontainer() {
  const [videos, setVideos] = useState([]);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideo();
  }, []);

  if (!videos.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
}

export default Videocontainer;
