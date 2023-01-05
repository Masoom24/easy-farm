import React from 'react'
import styled from 'styled-components';
import Sliders from "./Sliders";
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
      <div>
        <div className="min-h-screen flex flex-col  text-black">
          <main className="container mx-auto px-6 pt-16 flex-1 text-center">
            <h2 style={{ color: "#000051" }} className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
            <h1 style={{ color: "black" }} className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">The website name</h1>
            <Sliders />
            <p style={{ color: "#002984" }} className="text-base md:text-lg lg:text-2xl mb-8">A place for Buyers and Sellers to find tools and services related to agriculture!</p>

            <div style={{ color: "#E74C3C" }} className="bg-gradient-to-r from-purple-400 to cyan-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
              <h3> TOP OFFERS </h3>
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