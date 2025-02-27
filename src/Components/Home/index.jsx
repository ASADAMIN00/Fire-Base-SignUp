import { useEffect, useState } from "react";
import {auth} from "./../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    useEffect(()=>{

        // jo user login kr k aya h us ki details
        onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log(user); // current user
            } else{
                console.log('user not found');
            }
        })

    },[]) // only first time

    const onLogout = ()=> {

        signOut(auth).then(()=>{

            alert('Log out Successfully');
            navigate('/')

        }).catch((e)=>{

            alert(e);
            console.log(e);

        })
    }





  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-500 via-green-400 to-teal-500">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-[10px] md:px-6 flex justify-between items-center flex-wrap md:flex-nowrap">
        <h1 className="md:text-2xl text-xl font-bold text-gray-800">🔥 Firebase App</h1>
        <ul className="space-x-6 hidden md:flex">
          <li><a href="#" className="text-gray-700 font-semibold hover:text-blue-500">Home</a></li>
          <li><a href="#" className="text-gray-700 font-semibold hover:text-blue-500">Features</a></li>
          <li><a href="#" className="text-gray-700 font-semibold hover:text-blue-500">Contact</a></li>
        </ul>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 md:px-4 px-[10px] rounded-lg transition duration-300 shadow-lg mt-2 md:mt-0 cursor-pointer"
        >
          🚀 Logout
        </button>
      </nav>
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Welcome to Firebase App!</h2>
        <p className="text-lg text-white max-w-2xl">Manage your data, settings, and more with ease. Experience the power of Firebase in a beautiful UI MADE BY MUHAMMAD ASADULLAH AMIN.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6 w-full max-w-md md:max-w-none">
          <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
            📂 Manage Data
          </button>
          <button className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
            ⚙️ Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

