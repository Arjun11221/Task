import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  console.log(user);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { email, password } = userData;
    try {
      const res = await axios.post("https://backend-9bg9.onrender.com/api/v1/user/login", {
        email,
        password,
      });
      console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(getData(res.data.user));
        // dispatch(getData(res.data.data));
        if(res?.data?.data?.name === "Admin"){
          console.log(res.data.data.name);
          navigate('/admin') 
        }
        else{
          navigate('/user-dashboard')
        }
        localStorage.setItem("token", res.data.token);
        // window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Login</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form className="px-5 py-7" onSubmit={handleRegister}>
            <label
              htmlFor="email"
              className="font-semibold text-sm text-gray-600 pb-1 block"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              onChange={handleChange}
              value={userData.email}
            />

            <label
              htmlFor="password"
              className="font-semibold text-sm text-gray-600 pb-1 block"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              onChange={handleChange}
              value={userData.password}
            />
            <p className="font-semibold text-sm mx-20  text-gray-600 pb-1 block">
              New User{" "}
              <Link className="underline " to="/">
                Register
              </Link>{" "}
            </p>
            <button
              type="submit"
              className="transition duration-200 mt-5 bg-blue-500 hover:bg-blue-600 focus:shadow-sm focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
