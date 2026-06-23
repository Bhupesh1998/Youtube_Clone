import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmessages } from "../utils/chatSlices";
import { generateRandomName } from "../utils/helpers";

const chatMessages = [
  {
    user: "Priya Sharma",
    message: "First time watching live! 🔥",
    isMember: true,
  },
  {
    user: "Rahul Verma",
    message: "Great stream! Love the content",
    isMember: false,
  },
  {
    user: "Ananya Gupta",
    message: "Hello from Mumbai!",
    isMember: true,
  },
  {
    user: "Vikram Singh",
    message: "Can you explain the difference between useMemo and useCallback?",
    isMember: false,
  },
  {
    user: "Sneha Patel",
    message: "This is so helpful, thank you! 🙏",
    isMember: false,
  },
  {
    user: "Arjun Nair",
    message: "What editor are you using?",
    isMember: true,
  },
  {
    user: "Neha Reddy",
    message: "Just subscribed! 🔔",
    isMember: false,
  },
  {
    user: "Divya Jain",
    message: "Can you share the GitHub repo link?",
    isMember: true,
  },
  {
    user: "Karan Mehta",
    message: "Watching from Delhi!",
    isMember: false,
  },
  {
    user: "Riya Kapoor",
    message: "This deserves way more views",
    isMember: false,
  },
  {
    user: "Pooja Singh",
    message: "Best explanation on YouTube!",
    isMember: true,
  },
  {
    user: "Harsh Vardhan",
    message: "Please make a video on Redux Toolkit",
    isMember: false,
  },
  {
    user: "Tanvi Shah",
    message: "Hello from the chat! 👋",
    isMember: false,
  },
  {
    user: "Manish Tiwari",
    message: "Could you do a React Native video too?",
    isMember: true,
  },
  {
    user: "Kriti Agarwal",
    message: "Love the energy in this stream!",
    isMember: false,
  },
];

const ChatMessage = ({ data }) => {
  const initial = data.user.charAt(0).toUpperCase();

  return (
    <div className="flex items-start gap-2 px-3 py-1.5 hover:bg-gray-800/50">
      <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs font-medium text-gray-200 flex-shrink-0 mt-0.5">
        {initial}
      </div>
      <div>
        <span className="text-sm font-semibold text-gray-100">
          {data.user}
          {data.isMember && (
            <span className="ml-1 text-[10px] px-1 py-0.5 rounded bg-gray-600 text-gray-300 font-normal">
              Member
            </span>
          )}
        </span>
        <p className="text-sm text-gray-300 leading-snug">{data.message}</p>
      </div>
    </div>
  );
};

function LiveChat() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const polling = setInterval(() => {
      dispatch(
        addmessages({
          user: generateRandomName(),
          message: "Love the energy in this stream!",
          isMember: false,
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
    <div className="w-full bg-gray-900 rounded-xl overflow-hidden border border-gray-700 flex flex-col h-[500px]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-gray-100">Live Chat</h3>
          <span className="text-xs text-gray-500">•</span>
          <span className="text-xs text-gray-500">{chatMessages.length}</span>
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
