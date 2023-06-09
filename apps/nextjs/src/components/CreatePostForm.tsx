import { useState } from "react";
import toast from "react-hot-toast";

import { api } from "~/utils/api";

const CreatePostForm: React.FC = () => {
  const utils = api.useContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const {
    mutate,
    isLoading: isCreating,
    error,
  } = api.post.create.useMutation({
    async onSuccess() {
      setTitle("");
      setContent("");
      toast.success("New article created");
      await utils.post.all.invalidate();
    },
    onError(e) {
      if (!e.data) {
        toast.error("Failed to create post! Please try again later.");
      }
    },
  });

  return (
    <form
      className="flex w-full flex-col"
      onSubmit={(e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        mutate({
          title,
          content,
        });
      }}
    >
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
        <textarea
          className="mb-2 w-full rounded bg-white/10 p-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          rows={5}
          cols={33}
          autoComplete="off"
          id="content"
        />
        {error?.data?.zodError?.fieldErrors.content && (
          <span className="mb-2 text-red-500">
            {error.data.zodError.fieldErrors.content}
          </span>
        )}
      </div>
      <button
        type="submit"
        disabled={isCreating}
        className="rounded border-2 border-transparent bg-gray-950/95 p-2 font-bold text-white hover:border-gray-950/95 hover:bg-transparent hover:text-gray-900"
      >
        {isCreating ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default CreatePostForm;
