import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/Icons/Logos/png/ColorLogo.png';
import addToBasket from '../../asset/Icons/addToBasket.gif'
import { Button } from '@mui/material';
import { logoutUser } from '../../modules/reducer/productReducer';

const Header = () => {

    
    return (
        <>

            {/* <div style={footerStyles} className='flex justify-between px-5 focus:outline-none text-white bg-gradient-to-r from-purple-400 to cyan-500'> */}
            <div className='flex justify-between px-5 focus:outline-none text-black bg-gradient-to-b from-gray-400 to-white '>
                <div><Link to='/home'><img src={logo} alt="" className='w-48' /></Link></div>
                <div className='flex py-5 justify-between w-3/5'>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/home'>Home</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/contactUs'>Contact us</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/aboutUs'>About us</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/view'>Products</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/rentproduct'>Rent Products</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/myorders'>Orders</Link></li></div>
                </div>
                <div className='flex py-5 text-black'>
                </div>
                <div className='flex justify-center items-center'><Link to='/addProduct'><img src={addToBasket} className='w-16 drop-shado-lg' alt="logo" /></Link></div>
                <div className='flex justify-center items-center'><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl'><Link to="/" className='no-underline'><Button onClick={logoutUser}>Logout</Button></Link></li></div>
            </div>
                                                                                                                                                                                                                                                           
        </>
    )
}
export default Header
