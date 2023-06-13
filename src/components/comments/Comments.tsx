import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";

function Comments() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className="p-4 min-w-[320px] mb-10 xsm:max-w-[100%] max-w-md mx-auto bg-white flex justify-center flex-col items-start shadow">
      <div className="font-bold text-2xl w-[100%] mb-5">Comments</div>
      {[...Array(3)].map((e, idx) => {
        return (
          <div
            key={idx}
            className="mb-3 flex flex-row items-bottom border-b-2 w-[100%] pb-3"
          >
            <img
              className="mr-3 rounded-full w-8 h-8"
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt=""
            />
            <div>
              <span className="text-md">Tigran Petrosyants</span>
              <span className="flex items-center text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
            </div>
          </div>
        );
      })}

      {isAuth && (
        <div className="mt-4 flex flex-row w-[100%]">
          <img
            className="mr-3 rounded-full w-8 h-8"
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="User icon"
          />
          <textarea
            className="border border-gray-300 w-[100%] rounded p-2 outline-none focus:border-gray-500 transition-all"
            name="Comments input"
            placeholder="Write a comment"
          ></textarea>
        </div>
      )}
    </div>
  );
}

export default Comments;
