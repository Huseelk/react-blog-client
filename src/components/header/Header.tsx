import React from "react";
import { Link } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
import User from "./User";

function Header() {
  const logged: boolean = false;

  return (
    <nav className="w-[100%] bg-white py-4 shadow fixed z-10">
      <div className="sm:max-w-[60%] container mx-auto flex justify-between">
        <div>
          <Link
            className="btn rounded bg-slate-700 text-white px-2 py-2 font-bold ml-2 hover:bg-slate-950 transition-all"
            to={"/"}
          >
            MERN BLOG
          </Link>
        </div>
        {logged ? <User></User> : <HeaderLogin></HeaderLogin>}
      </div>
    </nav>
  );
}

export default Header;
