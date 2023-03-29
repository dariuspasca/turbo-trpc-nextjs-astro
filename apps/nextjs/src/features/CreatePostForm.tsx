import { useState } from "react";
import Link from "next/link";

import { api } from "~/utils/api";

const CreatePostForm: React.FC = () => {
  const utils = api.useContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate, error } = api.post.create.useMutation({
    async onSuccess() {
      setTitle("");
      setContent("");
      await utils.post.all.invalidate();
    },
  });

  return (
    <div className="flex w-full max-w-2xl flex-col p-4">
      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}
      <Link href="/yoo">Hello</Link>
      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      {error?.data?.zodError?.fieldErrors.content && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.content}
        </span>
      )}
      <button
        className="rounded bg-pink-400 p-2 font-bold"
        onClick={() => {
          mutate({
            title,
            content,
          });
        }}
      >
        Create
      </button>
    </div>
  );
};

export default CreatePostForm;
