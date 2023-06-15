import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/post/Post";
import { Link } from "react-router-dom";

function TagPosts() {
  const { tag } = useParams();
  const [posts, setPosts] = useState<any>();

  useEffect(() => {
    axios.get(`/tags/${tag}`).then((el) => {
      setPosts(el.data);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center align-center container mb-4 sm:max-w-[60%] w-90% mx-auto top-24 relative">
      <div className="mb-1">
        <div className="font-bold text-gray-600 flex flex-row items-center">
          <Link className="text-gray-400 mr-1 hover:text-gray-600" to={"/"}>Home</Link>
          <span className="h-2 w-2 border-t-2 border-r-2 border-gray-400 transform rotate-45"></span>
          <span className="ml-2 underline">{tag?.toUpperCase()}</span>
        </div>
      </div>

      <div className="xsm:w-[100%] pb-3">
        {posts &&
          posts.map((item: any, idx: number) => {
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
  );
}

export default TagPosts;
