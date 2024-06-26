/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../utils/userSlice";

// const ProtectedRoute = ({ children }) => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((store) => store.user);

//   const getUser = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:3030/api/v1/user/getUserData",
//         {
//           token: localStorage.getItem("token"),
//         },
//         {
//           headers: {
//             Authorization: "Bearer" + " " + localStorage.getItem("token"),
//           },
//         }
//       );
//       if (res.data.success) {
//         dispatch(getData(res.data.data));
//       } else {
//         <Navigate to={"/login"} />;
//         localStorage.clear();
//       }
//     } catch (error) {
//       console.log(error);
//       localStorage.clear();
//     }
//   };

//   useEffect(() => {
//     if (!user) {
//       getUser();
//     }
//   }, [user, getUser]);

//   if (localStorage.getItem("token")) {
//     return children;
//   } else {
//     return <Navigate to={"/login"} />;
//   }
// };
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const getUser = async () => {
    try {
      const res = await axios.post(
        "https://backend-9bg9.onrender.com/api/v1/user/getUserData",
        {
          token: localStorage.getItem("token"),
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        dispatch(getData(res.data.data));
      } else {
        localStorage.removeItem("token");
        return <Navigate to={"/login"} />;
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");
      return <Navigate to={"/login"} />;
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoute;
