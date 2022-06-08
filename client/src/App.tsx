import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import UploadFile from "./components/UploadFile";
import Register from "./components/Register";
import Login from "./components/Login";
import HomePage from "./components/HomePage"

function App() {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route  path="register" element={<Register/>} />
        <Route  path="upload" element={<UploadFile/>} />
        <Route  path="login" element={<Login/>} />
        <Route  path="*" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
