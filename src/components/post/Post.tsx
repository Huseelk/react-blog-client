import React from "react";
import { useSelector } from "react-redux";
import PostDescription from "./PostDescription";
import PostSkeleton from "./PostSkeleton";

function Post({ item, isFullPost }: any) {
  const userData = useSelector((state: any) => state.auth.data);

  const isEditable =
    userData?._id && item?.user._id && userData?._id === item?.user._id;

  return (
    <>
      {item ? (
        <article
          className={`border min-w-[320px] mb-10 xsm:max-w-[100%] max-w-md mx-auto bg-white flex justify-center flex-col items-start shadow ${
            isEditable && "hover:border-blue-600"
          }`}
        >
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
