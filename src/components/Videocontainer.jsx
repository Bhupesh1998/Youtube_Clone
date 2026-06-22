import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO } from "../utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router";

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
        <Link key={video.id} to={"watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default Videocontainer;
