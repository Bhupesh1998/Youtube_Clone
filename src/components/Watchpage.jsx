import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideDrawer } from "../utils/appSlice";
import { useSearchParams } from "react-router";

function Watchpage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideDrawer());
  }, []);

  if (!videoId) return <div className="pt-14 p-4">No video selected</div>;

  return (
    <div className="pt-14 p-4 max-w-5xl mx-auto">
      <div className="aspect-video bg-black rounded-xl overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          className="w-full h-full"
          allowFullScreen
          title="YouTube video player"
        />
      </div>
    </div>
  );
}

export default Watchpage;
