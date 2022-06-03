import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>welcome</h1>
      <button onClick={() => navigate("register")}>get started</button>
    </div>
  );
};

export default HomePage;
