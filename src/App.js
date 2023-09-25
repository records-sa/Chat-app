import { Routes, Route, useNavigate } from "react-router-dom";
import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { useEffect } from "react";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./redux/actions/user_action";

function App() {
  let navigate = useNavigate();
  let dispach = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      // 로그인이 된 상태
      if (user) {
        navigate("/");
        dispach(setUser(user));
      }
      // 로그인이 안 된 상태
      else {
        navigate("/login");
        dispach(clearUser());
      }
    });
  }, [navigate]);

  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    );
  }
}

export default App;
