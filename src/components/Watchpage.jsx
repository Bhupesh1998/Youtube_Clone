import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideDrawer } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

function Watchpage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideDrawer());
  }, []);

  if (!videoId) return <div className="pt-14 p-4">No video selected</div>;

  return (
    <div className="pt-14 px-2 sm:px-4 py-2 sm:py-4 max-w-7xl mx-auto">
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="flex-1 min-w-0">
          <div className="aspect-video bg-black rounded-lg sm:rounded-xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              className="w-full h-full"
              allowFullScreen
              title="YouTube video player"
            />
          </div>
          <CommentContainer />
        </div>
        <div className="w-full lg:w-96 flex-shrink-0">
          <LiveChat />
        </div>
      </div>
    </div>
  );
}

export default Watchpage;
