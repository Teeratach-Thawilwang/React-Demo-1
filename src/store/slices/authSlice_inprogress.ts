import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { signin } from "@mockData/users";
import { AuthState } from "@models/auth";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: "",
};

export const signinAsync = createAsyncThunk(
  "signin",
  async ({ email, password }: { email: string; password: string }, _store) => {
    try {
      const user = await signin(email, password);

      return user;
    } catch (error) {
      throw error;
    }
  }
);

// signinAsync.pending, signinAsync.fulfilled, signinAsync.rejected

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = "";
    },
  },
  // extraReducers: {
  //     [signinAsync.pending]: (state, action) => {
  //         state.loading = true
  //         state.error = ''
  //     },
  //     [signinAsync.fulfilled]: (state, action) => {
  //         state.user = action.payload
  //         state.loading = false
  //         state.error = ''
  //     },
  //     [signinAsync.rejected]: (state, action) => {
  //         state.user = null
  //         state.loading = false
  //         state.error = action.error.message
  //     },
  // },
  extraReducers: (builder) => {
    builder.addCase(signinAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(signinAsync.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(signinAsync.rejected, (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.error.message || "";
    });
  },
});

export const { signout } = authSlice.actions;

export default authSlice.reducer;
