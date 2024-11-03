import React  ,{ useState}from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Bs0Circle, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { Fa42Group } from "react-icons/fa6";
import { Md6KPlus, MdFavorite} from "react-icons/md";
import { Tb24Hours } from "react-icons/tb";

const Navbar = () => {
  const [nav,setNav]=useState(false)
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* left side */}
      <div className="flex items-center">
        <div  className="cursor-pointer">
          <AiOutlineMenu onClick={()=>setNav(!nav)} size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Watch <span className="font-bold">Anime</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-black text-white rounded-full p-2">Anime</p>
            <p className="p-2">Movie</p>
        </div>
      </div>

      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25}/>
        <input className="bg-transparent p-2 w-full" type="text" placeholder="Search foods"/>
      </div>

      {/* card button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full"> 
        <Bs0Circle size={20} className="mr-2"/> Logo
      </button>



    {/* mobile menu */}
    {/* overlay */}
    {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}

    {/* side drawer menu */}
    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer"/>
        <h2 className="text-2xl p-4">
        Watch <span className="font-bold"> Anime</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex"><Tb24Hours size={30} className="mr-4"/> Anime</li>
            <li className="text-xl py-4 flex"><MdFavorite size={30} className="mr-4"/> Drama Anime </li>
            <li className="text-xl py-4 flex"><Fa42Group size={30} className="mr-4"/> Action Anime</li>
            <li className="text-xl py-4 flex"><Md6KPlus size={30} className="mr-4"/> Romantic Anime</li>
            <li className="text-xl py-4 flex"><AiFillTag size={30} className="mr-4"/> Promotions</li>
            <li className="text-xl py-4 flex"><BsFillSaveFill size={30} className="mr-4"/> Best Ones</li>
            <li className="text-xl py-4 flex"><FaUserFriends size={30} className="mr-4"/> Invite Friends</li>
          </ul>
        </nav>
    </div>

    </div>

  );
};

export default Navbar;
