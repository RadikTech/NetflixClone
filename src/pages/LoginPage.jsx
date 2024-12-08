import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import CButton from "../components/CButton";
import { setLoggingIn, setUser } from "../app/authSlice";

const LoginPage = () => {
	const dispatch =useDispatch();
	const navigation = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isLoggingIn = useSelector((state) => state.auth.isLoggingIn);

	const handleLogin = (e) => {
		e.preventDefault();
		 dispatch(setUser({
            email:email,
			password: "",
			username:"UserTest",
			image:""
        }));
        dispatch(setLoggingIn(true));
		navigation("/")
	};

	return (
		<div className='h-full w-full'>
			<Header />

			<div className='flex justify-center items-center my-20 mx-3'>
				<div className='w-full max-w-md p-8 space-y-6 bg-black/80 rounded-lg shadow-md'>
					<h1 className='text-center text-white text-2xl font-bold mb-4'>Login</h1>

					<form className='space-y-4' onSubmit={handleLogin}>
						<div>
							<label htmlFor='email' className='text-sm font-medium text-gray-300 block'>
								Email
							</label>
							<input
								type='email'
								className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
								placeholder='test@example.com'
								id='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div>
							<label htmlFor='password' className='text-sm font-medium text-gray-300 block'>
								Password
							</label>
							<input
								type='password'
								className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
								placeholder='••••••••'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<CButton disabled={isLoggingIn} className="w-full" type="submit">
							{isLoggingIn ? "Loading..." : "Log In"}
						</CButton>
					</form>

					<div className='text-center text-gray-400'>
						Don't have an account?{" "}
						<Link to={"/signup"} className='text-red-500 hover:underline'>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LoginPage;
