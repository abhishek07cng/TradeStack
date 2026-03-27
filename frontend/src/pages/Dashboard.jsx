import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3002",
          {},
          { withCredentials: true }
        );

        if (!res.data.status) {
          navigate("/login");
        }
      } catch (err) {
        navigate("/login");
      }
    };

    verifyUser();
  }, []);

  return <h1>Welcome to Dashboard 🚀</h1>;
};

export default Dashboard;