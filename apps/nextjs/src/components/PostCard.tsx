import * as React from "react";

import { type Post } from "@acme/db";

interface PostCardProps {
  post: Post;
  onPostDelete?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onPostDelete }) => {
  const { title, content } = post;

  return (
    <div className="flex flex-row rounded-lg bg-white/10 p-4 transition-all hover:scale-[101%]">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-pink-400">{title}</h2>
        <p className="mt-2 text-sm">{content}</p>
      </div>
      <div>
        <span
          className="cursor-pointer text-sm font-bold uppercase text-pink-400"
          onClick={onPostDelete}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default PostCard;
