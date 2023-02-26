import React from 'react'
import styled from 'styled-components';
import Sliders from "./Sliders";
import Button from '@mui/material/Button'
export const Colors = styled.div`
    background : linear-gradient(
        to left,
        red,
        yellow,
        orange
    )
`
const Home = () => {
  

  return (
    <>
      <div style={{background:"white" ,padding:'3em'}}>
        <div className="min-h-screen flex flex-col  text-black">
          <main className="container mx-auto px-6 pt-16 flex-1 text-center">
            <h2 style={{ color: "#000051" }} className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
            <h1 style={{ color: "black" }} className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">EasyFarm</h1>
            
            <p style={{ color: "#002984" }} className="text-base md:text-lg lg:text-2xl mb-8 my-3">A place for Buyers and Sellers to find tools related to agriculture!</p>

            <div style={{ color: "#E74C3C" }} className=" flex justify-center items-center ml-[22vw] my-3 bg-gradient-to-r from-black to gray-900 hover:from-pink-500 hover:to-orange-500 text-white font-semibold py-3 rounded-md w-50 ">
              <h1 className='flex justify-center items-center py-2 w-1/2 uppercase text-bold text-xl'>Top Offers</h1>
            </div><Sliders /><br />
            <div>
            <Button class="bg-gradient-to-r from-black to gray-400 hover:from-gray-500 hover:to-black text-white font-semibold px-20 py-3 rounded-md mr-6">
              <center>Register</center>
            </Button>
            <div style={{ fontSize: 15, color: 'white' }}>
            <p>Once You Register You're Agreeing to Our Privacy Policy!</p>
           </div>
           </div>
            <div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Home