import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isSigningUp: false,
    isCheckingAuth: true,
    isLoggingOut: false,
    isLoggingIn: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoggingIn: (state, action) => {
            state.isLoggingIn = action.payload;
        },
        setLoggingOut: (state, action) => {
            state.isLoggingOut = action.payload;
        },
        setSigningUp: (state, action) => {
            state.isSigningUp = action.payload;
        },
        setCheckingAuth: (state, action) => {
            state.isCheckingAuth = action.payload;
        },
    },
});

export const { setUser, setLoggingIn, setLoggingOut, setSigningUp, setCheckingAuth } =
    authSlice.actions;

export default authSlice.reducer;
