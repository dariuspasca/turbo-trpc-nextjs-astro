import { type NextPage } from "next";

import Layout from "~/components/Layout";
import CreatePostForm from "~/features/CreatePostForm";

const CreatePost: NextPage = () => {
  return (
    <Layout>
      <CreatePostForm />
    </Layout>
  );
};

export default CreatePost;
