import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
} from 'react-icons/fa';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import logo from '../../asset/Icons/Logos/png/ColorLogo.png'
// const divStyles = {
//   color: "black",
//   backgroundColor: "#282c32",
//   padding: "10px",
//   fontFamily: "Sans-Serif"
// };


const Footer = () => {
  return (


    // <div style={divStyles} className=" mx-auto py-16 px-4 grid lg:grid-cols-1 gap-8 focus:outline-none text-white bg-gradient-to-r from-purple-400 to cyan-500">
    <div className=" mx-auto pt-16 px-4 grid lg:grid-cols-1 gap-8 focus:outline-none text-black bg-white">
      <div >
        <h1 style={{ color: "cyan" }} className="w-full text-3xl font-bold text-[#00df9a]"><img className="w-48" src={logo} alt="" /></h1>
        <p className="py-4">This is website for connecting buyers and sellers of agriculture related products.</p>
        <div className=' flex flex-col'>
          <h4 className='font-medium text-gray-400 max-w-[200px]'>Quick Links</h4><br />
          <div>

          </div>
          <div className='flex gap-[150px]'>
            <div className='flex'>
              <ul className='flex flex-col justify-start hover:cursor-pointer'>
                <li className='py-1 text-sm'>About Us</li>
                <li className='py-1 text-sm'>Contact Us</li>
                <li className='py-1 text-sm'>Privacy Policy</li>

              </ul>

            </div>

            <div className='flex hover:cursor-pointer'>
              <ul>
                <li className='py-1 text-sm'>Events</li>
                <li className='py-1 text-sm'>Terms& condition</li>
                <li className='py-1 text-sm'>Cookies Policy</li>
              </ul>
            </div>
            <div className="flex flex-end justify-between md:w-[10%] my-4 ">
              <a href='https://www.facebook.com/login/'><FaFacebookSquare size={30} /></a>
              <a href='https://www.instagram.com/accounts/login/'><FaInstagram size={30} /></a>
              <a href='https://twitter.com/i/flow/signup'><FaTwitterSquare size={30} /></a>
            </div>
            <div>
              <div className='mb-6 '>
                <h4>Feel free to subscribe. We won't send spams!!</h4><br />
                <div className='flex items-center '>
                  <input placeholder="Your Email here..." className='px-1 py-1 focus:outline-0 drop-shadow-lg text-black outline-none border-2 border-yellow-500 rounded-xl mx-2 bg-white' type="email" name="email" id="footerEmail" />
                  <Button variant="contained" endIcon={<SendIcon />} style={{ backgroundColor: "white", borderRadius: "12px", color: "black" }}>
                    Subscribe
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
export default Footer