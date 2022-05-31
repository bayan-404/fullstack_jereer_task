import React from "react";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
// import UploadFile from "./components/UploadFile";
import Register from "./components/Register";
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Register/>} />
        <Route exact path="/register" element={<Register/>} />
        {/* <Route exact path="/upload" element={<UploadFile/>} /> */}
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
