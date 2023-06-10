import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App bg-stone-100 min-h-[100vh]">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts/:id" element={<Login />} />
        <Route path="/add-post" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
