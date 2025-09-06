import { useState } from "react";
import { Link } from "react-router";
import Navbar from "../Components/nav";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login button clicked!");
  };

  return (
    <>
        <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

       
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-xl"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-xl"
                placeholder="•••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-2 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
           I have no account Please Register?{" "}
          <Link to ='/register' className="text-blue-600 hover:underline">
            Register
        </Link>
        </p>
      </div>
    </div></>

  );
}
