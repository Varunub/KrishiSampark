import React from 'react'
import { useState } from 'react'
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {MdShoppingBasket,MdAdd,MdLogout} from "react-icons/md"
import { useStateValue } from './context/StateProvider'
import { actionType } from './context/reducer'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config"
function Header(){
  const firebaseAuth=getAuth(app)
  const provider=new GoogleAuthProvider();
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  // const [isMenu, setIsMenu] = useState(false);
  // const [{user},dispatch]=useStateValue()
  const [isMenu,setMenu]=useState(false);
  const login=async ()=>{
    if(!user){
      const {user:{refreshToken,providerData}}= await signInWithPopup(firebaseAuth,provider);
      dispatch({
        type:actionType.SET_USER,
        user:providerData[0]
      })
      localStorage.setItem('user',JSON.stringify(providerData[0]));
    }
    else{
      setMenu(!isMenu)
    }
  };
  const logout = () => {
    setMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  return (
    <header className='fixed z-50 w-screen  p-6 px-12'>
        <div className='hidden md:flex w-full  h-full items-center justify-between'>
            <Link to={"/"} className='flex items-center gap-2'>
               
                <img src={Logo} className=" w-36 object-cover" alt='logo'></img>
            </Link>
            <motion.ul initial={{opacity:0,x:200}} animate={{opacity:1,x:0}} exit={{opacity:0,x:200}} className="flex items-center gap-8 ml-96">
              <Link to={"/"}>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Home
              </li>
              </Link>
              
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                <a href='#items'>Items</a>
              </li>
              
              <Link to={"/about"} className='flex items-center gap-2'>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  About us
                </li>
              </Link>
              <Link to={"/services"} className='flex items-center gap-2'>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Services
              </li>
              </Link>
              
              <div className="relative flex items-center justify-center" onClick={showCart} >
                <MdShoppingBasket className="text-textColor text-2xl cursor-pointer "/>
                {cartItems && cartItems.length > 0 && (
                  <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-xs text-white font-semibold">
                      {cartItems.length}
                    </p>
                  </div>
                )}
                
              </div>
              <div className='relative'>
                
                <motion.img whileTap={{scale:0.6}} src={user ? user.photoURL :Avatar} className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" alt='userprofile' onClick={login}></motion.img>
                {
                  isMenu &&(
                    <motion.div initial={{opacity:0,scale:0.6}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.6}} className="flex flex-col w-40 bg-primary shadow-xl rounded-lg absolute top-10 right-0 px-4 py-2" >
                  {
                     user && user.email ==="varunub1505@gmail.com" &&(
                      <Link to={'/createItem'}>
                      <p className=" py-3 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={() => setMenu(false)}>New Item<MdAdd></MdAdd></p>

                      </Link>
                     )
                  }
                  <p className="py-3 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={logout}>Logout<MdLogout></MdLogout></p>
              </motion.div>
                  )
                }
              </div>
              
            </motion.ul>
        </div>




        <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-32 object-cover" alt="logo" />
        </Link>



        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && user.email === "varunub1505@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
              <Link to={"/"}>
              <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setMenu(false)}
                >
                  Home
                </li>
              </Link>
                
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setMenu(false)}
                >
                  <a href='#items'>Items</a>
                </li>
                <Link to={"/about"}>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setMenu(false)}
                >
                  About Us
                </li>
                </Link>
                <Link to={"/services"}>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setMenu(false)}
                >
                  Service
                </li>
                </Link>
                
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;