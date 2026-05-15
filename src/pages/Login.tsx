import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } =
    useAuth();

  const navigate =
    useNavigate();

  const handleLogin = () => {
    login();

    navigate("/checkout");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 max-w-md w-full">
        <h1 className="text-4xl font-black mb-4">
          Welcome Back
        </h1>

        <p className="text-slate-400 mb-8">
          Login to continue to
          checkout.
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-4 rounded-2xl text-lg font-bold"
        >
          Login As Guest
        </button>
      </div>
    </div>
  );
};

export default Login;