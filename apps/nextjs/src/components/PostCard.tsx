import * as React from "react";

import { type Post } from "@acme/db";

interface PostCardProps {
  post: Post;
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
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="mt-2 text-sm">{content}</p>
      </div>
      {enableDelete && (
        <div>
          <span
            className="cursor-pointer text-sm font-bold uppercase text-gray-900"
            onClick={onPostDelete}
          >
            Delete
          </span>
        </div>
      )}
    </div>
  );
};

export default PostCard;
