import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import Layout from "~/components/Layout";
import PostCard from "~/components/PostCard";

const Home: NextPage = () => {
  const postQuery = api.post.all.useQuery();

  const deletePostMutation = api.post.delete.useMutation({
    onSettled: () => postQuery.refetch(),
  });

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="CMS Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mt-12 flex flex-col items-center justify-center gap-8 px-4 py-8">
          <div className="flex w-full max-w-2xl items-center justify-between">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Posts
            </h1>
            <Link
              href="/create-post"
              className="font-semibold text-gray-900 underline "
            >
              Create Post
            </Link>
          </div>

          {postQuery.data ? (
            <div className="w-full max-w-2xl">
              {postQuery.data?.length === 0 ? (
                <span>There are no posts!</span>
              ) : (
                <div className="flex h-[40vh] justify-center overflow-y-scroll px-4 text-2xl">
                  <div className="flex w-full flex-col gap-4">
                    {postQuery.data?.map((post) => {
                      return (
                        <PostCard
                          key={post.id}
                          post={post}
                          onPostDelete={() =>
                            deletePostMutation.mutate(post.id)
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
