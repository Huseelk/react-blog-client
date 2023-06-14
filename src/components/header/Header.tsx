import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/auth";
import HeaderLogin from "./HeaderLogin";
import User from "./User";

function Header() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <nav className="w-[100%] bg-white py-4 shadow fixed z-10">
      <div className="sm:max-w-[60%] container mx-auto flex justify-between items-center">
        <div>
          <Link
            className="flex btn rounded bg-slate-700 text-white px-2 py-1.5 font-bold ml-2 hover:bg-slate-950 transition-all"
            to={"/"}
          >
            MERN BLOG
          </Link>
        </div>
        {(isAuth ? <User></User> : <HeaderLogin></HeaderLogin>)}
      </div>
    </nav>
  );
}

export default Header;
