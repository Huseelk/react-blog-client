import React from "react";

function HeaderLogin() {
  return (
    <div className="flex">
      <div className="group mx-2">
        <button className="px-2 py-1 rounded border border-blue-600 text-blue-600 hover:bg-blue-600 group-hover:text-white transition-all shadow">
          SIGN IN
        </button>
      </div>

      <div className="group  mx-2">
        <button className="px-2 py-1 border border-blue-700 rounded bg-blue-700 text-white hover:bg-blue-900  transition-all shadow">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default HeaderLogin;
