import React from 'react'
import {Link} from 'react-router-dom';
import { register } from '../../modules/reducer/authReducer';
import { useDispatch } from 'react-redux';
const Signup = () => {
    const divStyles = {
        boxShadow: '1px 2px 5px #1A237E',
        padding: '1em',
        margin:'auto',
        height: '500px',
        width: '500px',
        marginTop: 25,
        textAlign: 'center'
    };
    const formFields = {
        boxShadow: '1px 2px 2px #1A237E',
        margin: '1em',
        padding: '1em',        
        alignItems: 'center',
    };
    const dispatch = useDispatch();
    const clickedButton = (e) =>{
        e.preventDefault();
        const data = {
            name:'anshul',
            email: 'anshulpa@gmail.com',
            password : '1234567A90',
            role: "seller"
        }
        dispatch(register({data}));
    } 
    return (
        <div>
            <div style={divStyles}>
                    <form onSubmit={clickedButton}>
                        <div className="container">
                            <h2 style={{ color: '#2ccce4' }} className="text-3xl font-bold">Sign-up</h2>
                            <div>
                                <input type="text" placeholder="Name" style={formFields} />
                            </div>
                            <div >
                                <input type="email" placeholder="Email" style={formFields} />
                            </div>
                            <div >
                                <input type="password" placeholder="Password" style={formFields} />
                            </div>
                            <div>
                                <button type="submit" className="btn" class="bg-gradient-to-r from-purple-400 to cyan-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6" >Signup</button>
                            </div >
                            <div style={{ color: '#2ccce4' }} className="text-3xs"> <br/>
                                Already a member? <Link to='/login'>Login</Link> here                     
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Signup
