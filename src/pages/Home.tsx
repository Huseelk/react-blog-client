import React, { useEffect } from "react";
import CommentsBlock from "../components/blocks/CommentsBlock";
import TagsBlock from "../components/blocks/TagsBlock";
import Post from "../components/post/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from "../redux/slices/post";
import { AppDispatch } from "../redux/store";

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, tags } = useSelector((state: any) => state.posts);

  const isPostLoading = posts.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-start mb-3 top-24 relative sm:max-w-[60%] mx-auto text-sm">
        <span className="mx-3 border-b-2 hover:border-blue-600 transition duration-150">
          New
        </span>
        <span className="mx-3 border-b-2 hover:border-blue-600 transition duration-150">
          Popular
        </span>
      </div>

      <div className="flex flex-wrap flex-row justify-center container sm:max-w-[60%] w-90% mx-auto top-24 relative">
        <div className="flex flex-row flex-wrap xl:flex-col xl:w-1/3 w-[100%] min-w-[100px]">
          <TagsBlock tags={tags.items}></TagsBlock>
          <CommentsBlock></CommentsBlock>
        </div>

        <div className="xl:w-2/3 w-[100%]">
          {(isPostLoading ? [...Array(5)] : posts.items).map(
            (item: any, idx: number) => {
              return (
                <Post
                  key={item?._id || idx}
                  item={item}
                  isFullPost={false}
                ></Post>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
