import { type NextPage } from "next";
import Head from "next/head";

import CreatePostForm from "~/components/CreatePostForm";
import Layout from "~/components/Layout";

const CreatePost: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Article</title>
        <meta name="description" content="Create an article for the blog" />
      </Head>
      <Layout>
        <section className="flex-1 p-4 md:p-10">
          <CreatePostForm />
        </section>
      </Layout>
    </>
  );
};

export default CreatePost;
