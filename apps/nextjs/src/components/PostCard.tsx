import * as React from "react";

import type { RouterOutputs } from "@acme/api";

interface PostCardProps {
  post: RouterOutputs["post"]["all"][number];
  enableDelete: boolean;
  onPostDelete?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  enableDelete,
  onPostDelete,
}) => {
  const { title, content } = post;

  return (
    <div className="flex flex-row rounded-lg p-4 shadow-lg transition-all hover:scale-[101%]">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-indigo-500">{title}</h2>
        <p className="mt-2 text-base">{content}</p>
      </div>
      {enableDelete && (
        <div>
          <button
            type="button"
            className="text-base font-semibold text-gray-900 hover:underline"
            onClick={onPostDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PostCard;
