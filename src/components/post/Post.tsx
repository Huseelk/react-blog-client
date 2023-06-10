import React from "react";
import PostDescription from "./PostDescription";

function Post() {
  return (
    <article className="mx-auto mb-10 xsm:max-w-[60%] max-w-xs bg-white relative top-24 flex justify-center flex-col items-center shadow">
      <div className="font-bold text-2xl w-[100%]">
        <img
          className="h-[100%] w-[100%]"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
          alt=""
        />
      </div>
      <PostDescription></PostDescription>
    </article>
  );
}

export default Post;
