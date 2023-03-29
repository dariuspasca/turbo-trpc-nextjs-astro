import * as React from "react";

import { type Post } from "@acme/db";

interface PostCardProps {
  post: Post;
  onPostDelete?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onPostDelete }) => {
  const { title, content } = post;

  return (
    <div className="flex flex-row rounded-lg p-4 shadow-xl transition-all hover:scale-[101%]">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="mt-2 text-sm">{content}</p>
      </div>
      <div>
        <span
          className="cursor-pointer text-sm font-bold uppercase text-gray-900"
          onClick={onPostDelete}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default PostCard;
