import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmessages } from "../utils/chatSlices";
import { generateRandomName, generateRandomComments } from "../utils/helpers";
import ChatMessage from "./ChatMessage";

function LiveChat() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const polling = setInterval(() => {
      dispatch(
        addmessages({
          user: generateRandomName(),
          message: generateRandomComments(),
          isMember: Math.random() > 0.5,
        }),
      );
    }, 2000);

    return () => clearInterval(polling);
  }, []);

  const chats = useSelector((store) => store.chat.messages);

  const handleformSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addmessages({
        user: "Bhupesh Mali",
        message: inputVal,
        isMember: false,
      }),
    );
    setInputVal("");
  };
  return (
    <div className="w-full bg-gray-900 rounded-xl overflow-hidden border border-gray-700 flex flex-col h-[350px] sm:h-[450px] lg:h-[500px]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-gray-100">Live Chat</h3>
          <span className="text-xs text-gray-500">•</span>
          <span className="text-xs text-gray-500">{chats.length}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-red-400 font-medium">LIVE</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col-reverse scrollbar-hide">
        <div className="py-2">
          {chats.map((msg, i) => (
            <ChatMessage key={i} data={msg} />
          ))}
        </div>
      </div>
      <div className="p-3 border-t border-gray-700">
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => handleformSubmit(e)}
        >
          <input
            type="text"
            placeholder="Chat..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-gray-800 text-gray-100 text-sm rounded-full px-4 py-2 outline-none border border-gray-600 focus:border-blue-500 placeholder-gray-500"
          />
          <button className="text-gray-400 hover:text-gray-200 p-2">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default LiveChat;
