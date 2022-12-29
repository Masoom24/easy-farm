import React from 'react';
import {Link} from 'react-router-dom';
import '../header/HeaderCSS';
const Header = () =>{
    return(
        <>

    <div className='flex justify-between p-5 border border-red-500 text-yellow-800'>
        <div>Logo</div>
        <div className='flex justify-between w-1/4 clear-none list-none'>
            <div><li className='headerUnderlineEffect hover:underline   hover:decoration-violet-900'><Link to='/home'>Home</Link></li></div>
            <div>Contact us</div>
            <div>About US</div>
        </div>
        <div className='flex text-orange-500'>
            <input type="search" name="" id="" className='border border-black px-2 py-1 focus:outline-0 hover:rounded-2xl' placeholder='Search Items'/>
        </div>
        <div>Profile</div>
    </div>
        
        </>
    )
}
export default Header
