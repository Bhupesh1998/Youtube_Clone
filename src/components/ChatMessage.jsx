import React from "react";

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

export default ChatMessage;
