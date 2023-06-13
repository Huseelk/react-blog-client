import React from "react";

function PostSkeleton() {
  return (
    <article className="min-w-[320px] mb-10 xsm:max-w-[100%] max-w-md mx-auto bg-white flex justify-center flex-col items-start shadow">
      <div className="font-bold text-2xl w-[100%] min-h-[200px] bg-gray-200"></div>

      <div className="mx-8 p-4 relative">
        <div className="flex flex-row">
          <p className="mr-3 w-8 h-8 absolute left-[-20px] bg-gray-200 text-gray-200 rounded-full">
            img
          </p>
          <div>
            <h3 className="font-bold text-sm bg-gray-200 text-gray-200 rounded">
              name
            </h3>
            <p className="text-xs bg-gray-200 text-gray-200 rounded">date</p>
          </div>
        </div>
        <h2 className="font-bold my-3 bg-gray-200 text-gray-200 rounded">
          loading...
        </h2>
        <div className="text-xs text-gray-400 flex flex-row">
          <div className="mr-6 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-xs mr-1 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span>0</span>
          </div>

          <div className="mr-6 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-xs mr-1 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>

            <span>0</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostSkeleton;
