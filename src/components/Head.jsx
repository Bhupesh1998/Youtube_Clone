import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

function Head() {
  const dispatch = useDispatch();
  const [inputValue, setInputVal] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!inputValue) {
        setSuggestions([]);
        return;
      }
      const data = await fetch(YOUTUBE_SEARCH_API + inputValue);
      const json = await data.json();
      setSuggestions(json[1] || []);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-white flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(toggleMenu())}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="red">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          <span className="text-lg font-semibold tracking-tight">YouTube</span>
        </div>
      </div>

      <div className="flex items-center flex-1 max-w-2xl mx-4">
        <div className="relative w-full">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={(e) => setInputVal(e.target.value)}
              onFocus={() => suggestions.length && setSuggestions(suggestions)}
              onBlur={() => setTimeout(() => setSuggestions([]), 200)}
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 text-sm"
            />
            <button className="px-5 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg mt-1 overflow-hidden">
              {suggestions.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => {
                    setInputVal(s);
                    setSuggestions([]);
                  }}
                >
                  <svg
                    className="w-4 h-4 text-gray-400 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Head;
