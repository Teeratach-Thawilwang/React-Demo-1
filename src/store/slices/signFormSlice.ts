import { createSlice } from "@reduxjs/toolkit";

import { SignFormState } from "@enums/SignFormState";
import { SignFormStateInterface } from "@models/interfaces/SignFormStateInterface";

const initialState: SignFormStateInterface = {
  isShow: false,
  selector: SignFormState.LOGIN,
  email: "",
  nickname: "",
  password: "",
  confirmPassword: "",
};

const signFormSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsShow: (state, action) => {
      state.isShow = action.payload;
    },
    fill: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { setIsShow, fill } = signFormSlice.actions;

export default signFormSlice.reducer;
