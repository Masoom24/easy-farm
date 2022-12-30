import logo from './logo.svg';
import './App.css';
import Button from'@mui/material/Button'
import TextField from '@mui/material/TextField';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from '@mui/material/Container';
import Header from './header/Header';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
  /*{
    path: "/home",
    element: <Home />,
  }*/
]);



function App() {
 
  const divStyles = {
    boxShadow: '1px 2px 5px #1A237E',
    margin: '2em',
    padding: '1em',
  };
  
  return (
    
    <div className="App">
      <div >
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <RouterProvider router={router} />
      
  </div>
     <Container maxWidth="sm">
    
      <h1 className="text-3xl font-bold">
      ADD PRODUCT
      </h1>
     
      <div style={divStyles}>
      <label>Enter product name</label>
      <TextField variant="filled" size='small' placeholder="NAME" fullWidth>
      </TextField><br />
      </div>
      
      <div style={divStyles}>
      <label>Enter product image</label>
      <TextField type="file" variant="filled" size='small' placeholder='IMAGE' fullWidth>
      </TextField>
      
      </div>
      <div style={divStyles}>
      <label>Enter product price</label>
      <TextField variant="filled" size='small' placeholder="PRICE" fullWidth>
      </TextField>
      </div>
      <div>
      <Button variant="contained" size='medium'>
        add product
      </Button>
      </div>
      
      </Container>
      
  </div>
 
  );
 
}

export default App;
