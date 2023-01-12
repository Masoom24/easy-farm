import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../asset/Icons/profile.gif';
import logo from '../../asset/Icons/Logos/png/ColorLogo.png';
import addToBasket from '../../asset/Icons/addToBasket.gif'

const Header = () => {

    // const footerStyles = {

    //     color: "white",
    //     backgroundColor: "#282c32",
    //     fontFamily: "Sans-Serif"
    //   };

    return (
        <>

            {/* <div style={footerStyles} className='flex justify-between px-5 focus:outline-none text-white bg-gradient-to-r from-purple-400 to cyan-500'> */}
            <div className='flex justify-between px-5 focus:outline-none text-black bg-white'>
                <div><Link to='/home'><img src={logo} alt="" className='w-48' /></Link></div>
                <div className='flex py-5 justify-between w-1/4'>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/home'>Home</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/contactUs'>Contact us</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/aboutUs'>About us</Link></li></div>
                </div>
                <div className='flex py-5 text-black'>
                    <input type="search" name="" id="" className='border-2 bg-transparent h-8 cursor-pointer text-white border-yellow-500 px-2 py-1 my-2 focus:outline-0 rounded-2xl drop-shadow-lg ' placeholder='Search Items' />
                </div>
                <div className='flex justify-center items-center'><Link to='/addProduct'><img src={addToBasket} className='w-16 drop-shado-lg' alt="logo" /></Link></div>
                <div className='flex justify-center items-center'><Link to='/profile'><img src={profile} className='w-16 drop-shado-lg' alt="logo" /></Link></div>
            </div>

        </>
    )
}
export default Header
