import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";

const appStore = configureStore({
      reducer :{
       user : userSlice,
       product: productSlice
      }
    });

export default appStore;