import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../modules/reducer/authReducer';
import { currValue } from '../../modules/selectors/auth';

export const Colors = styled.div`
    background : linear-gradient(
        to left,
        red,
        yellow,
        orange
    )
`
const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector(currValue)

  const onBtnClick = () => {
    console.log("click");
    dispatch(increment());
  }
  const onDecClick = () => {
    dispatch(decrement());
  }

  return (
    <>
      <div><button onClick={onBtnClick}>Click + </button></div>
      {
        value
      }
      <div><button onClick={onDecClick}>Click - </button></div>
    </>
  )
}

export default Home