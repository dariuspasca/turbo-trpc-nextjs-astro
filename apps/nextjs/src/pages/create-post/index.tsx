import { type NextPage } from "next";

import CreatePostForm from "~/components/CreatePostForm";
import Layout from "~/components/Layout";

const CreatePost: NextPage = () => {
  return (
    <Layout>
      <CreatePostForm />
    </Layout>
  );
};

export default CreatePost;
