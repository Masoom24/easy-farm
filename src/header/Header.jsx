import React from 'react';
import {Link} from 'react-router-dom';
const Header = () =>{
    return(
        <>

    <div className='flex justify-between p-5 border border-red-500'>
        <div>Logo</div>
        <div className='flex justify-between w-1/4'>
            <div><Link to='/home'>Home</Link></div>
            <div>Contact us</div>
            <div>About US</div>
        </div>
        <div>
            <input type="search" name="" id="" className='border border-black px-2 py-1 focus:outline-0 hover:rounded-2xl' placeholder='Search Items'/>
        </div>
        <div>Profile</div>
    </div>
        
        </>
    )
}
export default Header