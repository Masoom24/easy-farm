import{
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
} from 'react-icons/fa';
const divStyles = {
  
    color: "white",
    backgroundColor: "#282c32",
    padding: "10px",
    fontFamily: "Sans-Serif"
};


const Footer =() => {
  return(
    
      
    <div style={divStyles} className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-1 gap-8 text-gray-300">
      <div >
        <h1 style={{color: "cyan"}} className="w-full text-3xl font-bold text-[#00df9a]">Name</h1>
        <p className="py-4">this is website for connecting buyers and sellers of agriculture-related products and services.</p>
        <div className=' flex flex-col'>
          <h4 className='font-medium text-gray-400'>Quick Links</h4><br />
        <div>

        </div>
        <div className='flex'>
          <ul className='flex flex-col justify-start'>
            <li className='py-1 text-sm'>About Us</li>
            <li className='py-1 text-sm'>Contact Us</li>
            <li className='py-1 text-sm'>Privacy Policy</li>
            
            </ul>
            
        </div>

        <div className='flex '>
          <ul>
            <li className='py-1 text-sm'>Events</li>
            <li className='py-1 text-sm'>Terms& condition</li>
            <li className='py-1 text-sm'>Cookies Policy</li>
          </ul>
          </div></div>
        <div className="flex justify-between md:w-[10%] my-4">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30}/>
          <FaTwitterSquare size={30}/>
        </div>
      </div>
    </div>
    
  )
}
export default Footer