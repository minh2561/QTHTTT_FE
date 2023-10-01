import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../actions/auth";
import styled from "styled-components";
import Loginbackground from "../../assets/images/login-background.jpg";
import { toast } from "react-toastify";

const LoginPageStyle = styled.div`
  background-image: url(${Loginbackground});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;
export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state.testReducer.data);

  const handleChangeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(authAction.getData());
  }, []);


  return (
    <LoginPageStyle>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[#fff]">
          <div class="form-container p-[20px]">
            <h2>Đăng Ký</h2>
            <form className="flex flex-col gap-[10px]">
              <label for="name">Họ và Tên:</label>
              <input
                type="text"
                id="name"
                name="userName"
                onChange={handleChangeData}
              />

              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChangeData}
              />

              <label for="password">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                name="passWord"
                onChange={handleChangeData}
              />

              <button type="submit">Đăng Ký</button>
            </form>
          </div>
        </div>
      </div>
    </LoginPageStyle>
  );
}
