import React from "react";

function HeaderLogin() {
  return (
    <div className="flex">
      <div className="group mx-2">
        <button className="px-2 py-1 rounded border border-blue-600 text-blue-600 hover:bg-blue-600 group-hover:text-white transition-all">
          SIGN IN
        </button>
      </div>

      <div className="group  mx-2">
        <button className="px-2 py-1 border border-blue-600 rounded bg-blue-600 text-white hover:bg-white group-hover:text-blue-600 transition-all">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default HeaderLogin;
