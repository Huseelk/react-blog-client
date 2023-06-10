import React, { useState } from "react";
import HeaderLogin from "./HeaderLogin";
import User from "./User";

function Header() {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <div className="w-[100%] bg-white py-4 px-5 shadow fixed z-10">
      <div className="container mx-auto flex justify-between">
        <div>
          <button className="btn rounded bg-slate-700 text-white px-2 py-1 font-bold hover:bg-slate-950 transition-all">
            MERN BLOG
          </button>
        </div>
        {logged ? <User></User> : <HeaderLogin></HeaderLogin>}
      </div>
    </div>
  );
}

export default Header;
