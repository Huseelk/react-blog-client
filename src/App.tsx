import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import AddPost from "./pages/AddPost";
import FullPost from "./pages/FullPost";
import Home from "./pages/Home";

import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import { AppDispatch } from "./redux/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchAuthMe());
    }
  }, []);

  return (
    <div className="App min-h-[100vh]">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<FullPost />} />
        {isAuth && <Route path="/add-post" element={<AddPost />} />}
        {!isAuth && <Route path="/login" element={<Login />} />}
        {!isAuth && <Route path="/register" element={<Registration />} />}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
