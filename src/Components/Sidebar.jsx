import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoLibraryOutline } from "react-icons/io5";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";

import { useLocation } from "react-router-dom";

const Sidebar = () => {
  let params = useLocation();
  const path = params.pathname;

  return (
    <div className="p-0 sm:block z-30  relative">
      <div className="px-5 py-3">
        <Link
          className="flex items-center justify-between text-[#0dd6b8]"
          to="/home"
        >
            <div className="flex justify-center items-center w-full h-[7rem]">

          <h1 className="text-xl font-bold">ClassRoom</h1>
            </div>

        </Link>
      </div>
      <div className="flex flex-col text-[16px] gap-4 px-5">
        <Link
          className={
            path === "/home"
              ? `py-3 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-3 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/home"
        >
          <AiOutlineHome />
          <span>Home</span>
        </Link>
        <Link
          className={
            path === "/create-room"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/create-room"
        >
          <BiCategory />
          <span>Create Room</span>
        </Link>
        <Link
          className={
            path === "/Quiz"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/Quiz"
        >
          <IoLibraryOutline />
          <span>Quiz</span>
        </Link>
        <Link
          className={
            path === "/session"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/session"
        >
          <MdOutlineLibraryAddCheck />
          <span>Session Analytics</span>
        </Link>
        <Link
          className={
            path === "/attendance"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/attendance"
        >
          <FiHeart />
          <span>Attendance</span>
        </Link>
        <Link
          className={
            path === "/room-analytics"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/room-analytics"
        >
          <AiOutlineSetting />
          <span>Room Analytics</span>
        </Link>
        <Link
          className={
            path === "/about"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/about"
        >
          <FiHelpCircle />
          <span>About Us</span>
        </Link>
      </div>














      
    </div>
  );
};

export default Sidebar;
