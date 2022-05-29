import React from "react";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import UploadFile from "./components/UploadFile";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Register/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/upload" element={<UploadFile/>} />
      </Routes>
    </div>
  );
}

export default App;
