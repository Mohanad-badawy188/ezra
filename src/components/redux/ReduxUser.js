// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     user: null,
//     isFetching: false,
//     error: false,
//   },
//   reducers: {
//     loginStart: (state) => {
//       state.isFetching = true;
//     },
//     loginSuccess: (state, action) => {
//       state.isFetching = false;
//       state.user = action.payload;
//       state.error = false;
//     },
//     loginFail: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//     signupStart: (state) => {
//       state.isFetching = true;
//     },
//     signupSuccess: (state, action) => {
//       state.isFetching = false;
//       state.user = action.payload;
//       state.error = false;
//     },
//     signupFail: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//   },
// });
// export const {loginStart,loginSuccess,loginFail,signupSuccess,signupFail,signupStart} = userSlice.actions;
// export default userSlice.reducer;
