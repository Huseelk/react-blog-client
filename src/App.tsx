import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Post from "./components/post/Post";
import Registration from "./components/registration/Registration";

function App() {
  return (
    <div className="App min-h-[100vh]">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts/:id" element={<Login />} />
        <Route path="/add-post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
