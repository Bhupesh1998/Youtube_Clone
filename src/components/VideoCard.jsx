import { formatViews } from "../utils/helpers";

function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="cursor-pointer">
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full rounded-xl"
      />
      <div className="flex gap-3 mt-3">
        <div className="w-9 h-9 bg-gray-200 rounded-full shrink-0" />
        <div>
          <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{channelTitle}</p>
          <p className="text-sm text-gray-600">
            {formatViews(statistics.viewCount)} views
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
