import { setUser, setLoggingIn, setLoggingOut, setSigningUp, setCheckingAuth } from "./authSlice";
import toast from "react-hot-toast";

export const login = (credentials) => async (dispatch) => {
    try {
        console.log("credentials");
        // const response = await axios.post("/api/v1/auth/login", credentials);
        dispatch(setUser({
            email:credentials.email,
			password: "",
			username:"UserTest",
			image:""
        }));
        dispatch(setLoggingIn(true));
        toast.success("Login successful");
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Login failed");
    } finally {
        console.log("finally");
        dispatch(setLoggingIn(false));
    }
};

export const logout = () => async (dispatch) => {
    dispatch(setLoggingOut(true));
    try {
        // await axios.post("/api/v1/auth/logout");
        dispatch(setUser(null));
        toast.success("Logout successful");
    } catch (error) {
        toast.error(error.response?.data?.message || "Logout failed");
    } finally {
        dispatch(setLoggingOut(false));
    }
};

export const signup = (credentials) => async (dispatch) => {
    dispatch(setSigningUp(true));
    try {
        // const response = await axios.post("/api/v1/auth/signup", credentials);
        dispatch(setUser({ success: true, user: {
            email:credentials.email,
			password: "",
			username:"UserTest",
			image:""
        }
    }));
        toast.success("Account created successfully");
    } catch (error) {
        toast.error(error.response?.data?.message || "Signup failed");
    } finally {
        dispatch(setSigningUp(false));
    }
};

export const authCheck = () => async (dispatch) => {
    dispatch(setCheckingAuth(true));
    try {
        // const response = await axios.post("/api/v1/auth/authCheck");
        dispatch(setUser({ success: true, user: {
            email:"user@gmail.com",
			password: "",
			username:"UserTest",
			image:""
        }
    }));
        toast.success("User authenticated successfully");
    } catch (error) {
        toast.error(error.response?.data?.message || "Authentication failed");
        dispatch(setUser(null));
    } finally {
        dispatch(setCheckingAuth(false));
    }
};
