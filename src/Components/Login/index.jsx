import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "./../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // -------- handleChange ----------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // -------- handleSubmit ------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth,formData.email,formData.password)
    .then((userDetails) => {

        // successfully sign in
        console.log(userDetails);
        alert("Login Successful! Welcome to Home Page");
        navigate('/home')

    }).catch((error)=>{

        console.log(error);
        alert(error)

    })
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 p-4">
      <div className="bg-white p-[15px] md:p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gray-200">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none shadow-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none shadow-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-lg cursor-pointer"
          >
            🔥 Login with Firebase
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">Don't have an account? <a href="#" className="text-blue-600 font-semibold hover:underline" onClick={()=> navigate('/')}>Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
