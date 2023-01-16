import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import React from 'react';
import Container from '@mui/material/Container';





function AddProduct() {

    const divStyles = {
        boxShadow: '1px 3px 5px #1C2833',
        margin: '2em',
        padding: '1em',
        background:'#797D7F',

    };//#DDCDCA
    const divStyles1 = {
        boxShadow: '1px 3px 5px #1C2833',
        margin: '2em',
        padding: '1em',
        background:'#D0D3D4',

    };//#F2F3F4

    return (


        <div style={divStyles} >
            <Container maxWidth="sm" >

                <h1 style={{ color: 'black' }} className="text-3xl font-bold">
                    <center>ADD PRODUCT</center>
                </h1>

                <div style={divStyles1}>
                    <label style={{ color: 'black' }}>Enter product name</label>
                    <TextField variant="filled" size='small' placeholder="NAME" fullWidth>
                    </TextField><br />
                </div>

                <div style={divStyles1}>
                    <label style={{ color: 'black' }}>Enter product image</label>
                    <TextField type="file" variant="filled" size='small' placeholder='IMAGE' fullWidth>
                    </TextField>

                </div>
                <div style={divStyles1}>
                    <label style={{ color: 'black' }}>Enter product price</label>
                    <TextField variant="filled" size='small' placeholder="PRICE" fullWidth>
                    </TextField>
                </div>

                <div>
                </div>
                <div style={divStyles1}>
                    <label style={{ color: 'black' }}>Enter product description</label>
                    <TextField variant="filled" size='small' placeholder="DESCRIPTION" fullWidth>
                    </TextField>
                </div>

                <div style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center"
                     }}>
                    <Button class="bg-gradient-to-r from-black to gray-400 hover:from-gray-500 hover:to-black text-white font-semibold px-6 py-3 rounded-md mr-6">
                        <center>add product</center>
                    </Button>
                </div>

            </Container>
        </div>
  
  
  );

}

export default AddProduct;
