import React from "react";
import { Link } from "react-router-dom";

function HeaderLogin() {
  return (
    <div className="flex">
      <div className="group mx-2">
        <Link
          className="p-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-600 group-hover:text-white transition-all shadow"
          to={"/login"}
        >
          SIGN IN
        </Link>
      </div>

      <div className="group  mx-2">
        <Link
          className="p-2 border border-blue-700 rounded bg-blue-700 text-white hover:bg-blue-900  transition-all shadow"
          to={"/register"}
        >
          SIGN UP
        </Link>
      </div>
    </div>
  );
}

export default HeaderLogin;
