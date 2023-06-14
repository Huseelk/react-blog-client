import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/auth";
import { AppDispatch } from "../../redux/store";

function User() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onClickLogout = () => {
    if (window.confirm("Are youy sure you want to logout?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div className="flex">
      <div className="mx-2">
        <Link to={'/add-post'} className="flex px-2 py-1 rounded border border-blue-500 text-white bg-blue-500 hover:bg-blue-700 transition-all">
          NEW POST
        </Link>
      </div>

      <div className="mx-2">
        <button
          onClick={onClickLogout}
          className="flex px-2 py-1 border border-red-500 rounded bg-red-500 text-white hover:bg-red-700 transition-all"
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default User;
