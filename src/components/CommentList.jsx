import React from "react";

const CommentCard = ({ data }) => {
  const { name, text, timestamp, likes } = data;
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
          {initial}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-gray-900">{name}</span>
          <span className="text-gray-500 text-xs">{timestamp}</span>
        </div>
        <p className="mt-1 text-sm text-gray-800">{text}</p>
        <div className="flex items-center gap-4 mt-1">
          <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
            <span className="text-xs">{likes}</span>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M17.367 13.75c-.807 0-1.533-.446-2.031-1.08a9.041 9.041 0 0 0-2.861-2.4c-.723-.384-1.35-.956-1.653-1.715a4.498 4.498 0 0 1-.322-1.672V2.75a.75.75 0 0 0-.75-.75 2.25 2.25 0 0 0-2.25 2.25c0 1.152.26 2.243.723 3.218.266.558-.107 1.282-.725 1.282m0 0H7.124c-1.026 0-1.945.694-2.054 1.715-.045.422-.068.85-.068 1.285a11.95 11.95 0 0 0 2.649 7.521c.388.482.987.729 1.605.729H9.77c.483 0 .964-.078 1.423-.23l3.114-1.04a4.501 4.501 0 0 1 1.423-.23h1.294m-10.598-9.75h8.25" />
            </svg>
          </button>
          <button className="text-xs font-medium text-gray-500 hover:text-gray-700">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <CommentCard data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-12 pl-6 border-l-2 border-gray-100 mt-3 space-y-4">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

export default CommentList;
