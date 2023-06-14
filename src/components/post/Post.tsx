import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchRemovePost } from "../../redux/slices/post";
import { AppDispatch } from "../../redux/store";
import PostDescription from "./PostDescription";
import PostSkeleton from "./PostSkeleton";

function Post({ item, isFullPost }: any) {
  const userData = useSelector((state: any) => state.auth.data);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const isEditable =
    userData?._id && item?.user._id && userData?._id === item?.user._id;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const onClickRemove = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(fetchRemovePost(item._id));
      navigate("/");
    }
  };

  return (
    <>
      {item ? (
        <article
          className={`border min-w-[320px] mb-10 xsm:max-w-[100%] max-w-md mx-auto bg-white flex justify-center flex-col items-start shadow relative transition-all ${
            isEditable && "hover:border-blue-600"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`flex-row flex w-[100%] text-end justify-end absolute top-3 right-2 ${
              isHovered && isEditable ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="mx-1">
              <svg
                className="border-2 border-transparent rounded h-8 w-8 text-blue-700 bg-white hover:scale-105 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div className="mr-1">
              <svg
                className="border-2 border-transparent rounded h-8 w-8 text-red-700 bg-white hover:scale-105 transition-all"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={onClickRemove}
              >
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="18" y1="6" x2="6" y2="18" />{" "}
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
          {item?.imageUrl ? (
            <div className="font-bold text-2xl w-[100%]">
              <img
                className="h-[100%] w-[100%]"
                src={item?.imageUrl}
                alt={item?.title}
              />
            </div>
          ) : null}
          <PostDescription
            isFullPost={isFullPost}
            item={item}
          ></PostDescription>
        </article>
      ) : (
        <PostSkeleton></PostSkeleton>
      )}
    </>
  );
}

export default Post;
