import React from "react";

function Login() {
  return (
    <div className="mx-auto max-w-md bg-white relative top-24 p-4 flex justify-center flex-col items-center">
      <div className="mb-8 mt-6 font-bold text-2xl">Log In To Your Account</div>
      <div>
        <form action="" className="flex flex-col items-center">
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
          <button className="w-[100%] p-2 rounded border bg-blue-500 hover:bg-blue-700 transition-all text-white mb-12">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
