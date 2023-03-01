import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../modules/reducer/authReducer';
const Login = () => {

    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((pre) => ({
            ...pre,
            [name]: value
        }))
    }
    console.log(loginData);

    const clickedLogin = (e) => {
        e.preventDefault();
        dispatch(login({ data : loginData }));
    }
    const divStyles = {
        boxShadow: '1px 2px 5px #1A237E',
        margin: 'auto',
        padding: '1em',
        height: '400px',
        width: '500px',
        marginTop: 25,
        textAlign: 'center'
    };
    const formFields = {
        boxShadow: '1px 2px 2px #1A237E',
        margin: '1em',
        padding: '1em',
    };
    return (
        <div>
            <div style={divStyles}>
                <form onSubmit={clickedLogin}>
                    <div className="container">
                        <h2 style={{ color: '#2ccce4' }} className="text-3xl font-bold">Login</h2>
                        <div >
                            <input onChange={handleInputChange} value={loginData.email} name='email' type="email" placeholder="Email" style={formFields} />
                        </div>
                        <div >
                            <input onChange={handleInputChange} value={loginData.password} name='password' type="password" placeholder="Password" style={formFields} />
                        </div>
                        <div>
                            <button className="btn" type='submit' class="bg-gradient-to-r from-purple-400 to cyan-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6" >Login</button>
                        </div >
                        <div style={{ color: '#2ccce4' }} className="text-3xs"> <br />
                            Not a member? <Link to='/signup'>Sign-up </Link> here
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
