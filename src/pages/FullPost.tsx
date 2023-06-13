import axios from "../axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../components/post/Post";
import { AxiosResponse } from "axios";
import Comments from "../components/comments/Comments";

function FullPost({ item }: any) {
  const [data, setData] = useState<AxiosResponse>();
  const { id } = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((post) => {
        setData(post.data);
      })
      .catch((e) => {
        console.error(e);
        navigate('/posts')
      });
  }, []);

  return !data ? (
    <div className="flex flex-wrap flex-row justify-center container sm:max-w-[60%] w-90% mx-auto top-24 relative">
      <Post isFullPost={true} item={item}></Post>
    </div>
  ) : (
    <div className="container mb-4 sm:max-w-[60%] w-90% mx-auto top-24 relative">
      <Post isFullPost={true} item={data}></Post>
      <div className="pb-4">
        <Comments></Comments>
      </div>
    </div>
  );
}

export default FullPost;
