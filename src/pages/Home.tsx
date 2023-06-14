import React, { useEffect, useState } from "react";
import CommentsBlock from "../components/blocks/CommentsBlock";
import TagsBlock from "../components/blocks/TagsBlock";
import Post from "../components/post/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from "../redux/slices/post";
import { AppDispatch } from "../redux/store";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const [newDate, setNewDate] = useState(true);

  const { posts, tags } = useSelector((state: any) => state.posts);

  const isPostLoading = posts.status === "loading";

  const sortPosts = (items: any) => {
    const sortItems = [...items].sort(
      (a: any, b: any) => b.viewsCount - a.viewsCount
    );
    return sortItems;
  };

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-start mb-3 top-24 relative sm:max-w-[60%] mx-auto text-sm">
        <span
          onClick={() => setNewDate(true)}
          className={`${
            newDate && "border-blue-600"
          } mx-3 cursor-pointer border-b-2 hover:border-blue-600 transition duration-150`}
        >
          New
        </span>
        <span
          onClick={() => setNewDate(false)}
          className={`${
            !newDate && "border-blue-600"
          } mx-3 cursor-pointer border-b-2 hover:border-blue-600 transition duration-150`}
        >
          Popular
        </span>
      </div>

      <div className="flex flex-wrap flex-row justify-center container sm:max-w-[60%] w-90% mx-auto top-24 relative">
        <div className="flex flex-row flex-wrap xl:flex-col xl:w-1/3 w-[100%] min-w-[100px]">
          <TagsBlock tags={tags.items}></TagsBlock>
          <CommentsBlock></CommentsBlock>
        </div>

        <div className="xl:w-2/3 w-[100%]">
          {(isPostLoading
            ? [...Array(5)]
            : newDate
            ? posts.items
            : sortPosts(posts.items)
          ).map((item: any, idx: number) => {
            return (
              <Post
                key={item?._id || idx}
                item={item}
                isFullPost={false}
              ></Post>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
