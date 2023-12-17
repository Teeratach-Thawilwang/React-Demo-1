import { createSlice } from "@reduxjs/toolkit";

import { SignFormState } from "@enums/frontside/SignFormStateEnum";
import { SignFormStateInterface } from "@models/interfaces/frontside/SignFormStateInterface";

const initialState: SignFormStateInterface = {
  isShow: false,
  plane: false,
  box: false,
  selector: SignFormState.LOGIN,
  email: "",
  nickname: "",
  password: "",
  confirmPassword: "",
};

const signFormSlice = createSlice({
  name: "signForm",
  initialState: initialState,
  reducers: {
    fill: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { fill } = signFormSlice.actions;

export default signFormSlice.reducer;
