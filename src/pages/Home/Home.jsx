import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-slate-500">
      <div className="w-full max-w-xs">
        <h1 className="font-bold text-5xl mb-5">WELCOME</h1>
        <p className="font-semibold text-2xl ">Selamat datang di website Noteweb</p>
        <Link className=" mt-6 drop-shadow-md bg-gray-700 h-20 px-10 font-semibold rounded-full text-2xl hover:bg-blue-700 " to={"/Notes"}>
          Click disini...
        </Link>
        <footer className=" max-w-xs mt-5">
          <p className="font-semibold text-2xl">My Instragram</p>
          <a href="https://www.instagram.com/ahmdfrizza/?hl=en">
            <img className="w-20 ml-28 mt-3" src="ig.jpg" alt="ig" />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
