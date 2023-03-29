import { useState } from "react";

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
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="mb-2 w-full rounded bg-white/10 p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Your blog title"
          id="title"
          type="text"
        />
        {error?.data?.zodError?.fieldErrors.title && (
          <span className="mb-2 text-red-500">
            {error.data.zodError.fieldErrors.title}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="content"
        >
          Content
        </label>
        <input
          className="mb-2 w-full rounded bg-white/10 p-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          id="content"
          type="text"
        />
        {error?.data?.zodError?.fieldErrors.content && (
          <span className="mb-2 text-red-500">
            {error.data.zodError.fieldErrors.content}
          </span>
        )}
      </div>
      <button
        className="rounded bg-gray-900/95 p-2 font-bold text-white"
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
