import React from "react";

function Registration() {
  return (
    <div className="mx-auto xsm:max-w-md max-w-xs bg-white relative top-24 p-4 flex justify-center flex-col items-center">
      <div className="mb-8 mt-6 font-bold text-2xl flex flex-col items-center">
        <span>Create New Account</span>
        <div className="mt-4 relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400">
          <svg
            className="absolute text-white top-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded border-gray-400 mb-5 py-1 px-2 outline-none focus:border-blue-700 shadow"
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="border rounded border-gray-400 mb-5 py-1 px-2 outline-none focus:border-blue-700 shadow"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded border-gray-400 mb-6 py-1 px-2 outline-none focus:border-blue-700 shadow"
          />
          <button className="w-[100%] p-2 rounded border bg-blue-500 hover:bg-blue-700 transition-all text-white mb-12 font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
