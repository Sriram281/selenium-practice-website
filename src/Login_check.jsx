import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login_check = () => {
  const nav = useNavigate();
  const storage = window.localStorage.getItem("studentID");
  useEffect(() => {
    if (storage) {
      nav("/Title_alter");
    } else if (!storage) {
      nav("/");
    }
  }, []);
  return <></>;
};

export default Login_check;
