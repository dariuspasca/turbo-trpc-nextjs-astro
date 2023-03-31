import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import Layout from "~/components/Layout";
import PostCard from "~/components/PostCard";

const Home: NextPage = () => {
  const postQuery = api.post.all.useQuery();
  const { data: session } = api.auth.getSession.useQuery();

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
        <div className="mt-12 flex flex-col items-center justify-center gap-8">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Articles
            </h1>
            <Link
              href="/create-post"
              className="font-semibold text-gray-900 hover:underline"
            >
              Create Post
            </Link>
          </div>

          {postQuery.data ? (
            <div className="w-full">
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
                          enableDelete={session?.user.role !== "USER"}
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
            <p className="pt-10 text-lg">Loading...</p>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
