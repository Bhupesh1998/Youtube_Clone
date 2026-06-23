import React from "react";
import CommentList from "./CommentList";
import { commentsData } from "../utils/commentsData";

function CommentContainer() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-6 mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Comments
        </h2>
        <span className="text-sm text-gray-500">
          {commentsData.length}
        </span>
      </div>
      <div className="space-y-5">
        <CommentList comments={commentsData} />
      </div>
    </div>
  );
}

export default CommentContainer;
