import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const changeHTML = () =>{
        navigate("/");
    }
  return (
    <>
        <button onClick={changeHTML}>Click</button>
    </>
  )
}

export default Home