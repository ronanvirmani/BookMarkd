import React, { useState } from 'react'
import { useAppContext } from '../AppContext';
import { Link, useNavigate } from 'react-router-dom'; // Import useHistory

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginFail, setLoginFail] = useState(false)
    const { setUser, supabase } = useAppContext();
    const navigate = useNavigate();


    async function handleLogin(event) {
        event.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          });
          setUser(data.user);

          // redirect to home page if login successful, otherwise go to the login_unsuccessful page
          if (error) {
            setLoginFail(true);
          } else {
            console.log(data.user);
            navigate('/profile');
          }
    }


    return (
        <div className="w-1/3 mx-auto mt-16 p-12 bg-beige border border-green rounded-xl shadow">
          <h1 className="text-3xl font-semibold text-center mb-8 text-brown">Welcome Back</h1>
          {loginFail && (
            <p className="text-base  text-center text-red-500">
              Invalid credentials. Please try again.
            </p>
          )}
          <form className="flex flex-col space-y-6">
            <label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-200 p-3 rounded-lg"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                className="w-full border border-gray-200 p-3 rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-green text-white font-semibold p-3 rounded-lg"
              onClick={handleLogin}
            >
              Login
            </button>
            <div className="flex flex-row gap-x-6 justify-center items-center">
              <p className="">Dont have an account yet?</p>
              <Link
                to="/signup"
                className="bg-green-500 px-3 py-2 rounded-lg text-black font-semibold"
              >
                Signup
              </Link>
            </div>
          </form>
        </div>
      );
}

export default Login
