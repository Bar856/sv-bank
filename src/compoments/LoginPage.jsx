import React from 'react';
import { useState } from 'react';
import {Navigate,Link} from "react-router-dom";
export default function LoginPage(props) {
    const [navToCust, setnavToCust] = useState(false)
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const loginBtnFn = () => {
        if (props.checkLogin(username,password)){
            setnavToCust(true);
        }else{
            alert('Username Or Password Incorrect')
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <input style={{'marginBottom':'10px'}} type="text" onChange={(e)=>{setUserName(e.target.value)}} placeholder='User Name' />
        </div>
        <div className='row'>
            <input style={{'marginBottom':'10px'}} type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
        </div>
        <div className='row'>
            <div style={{'marginLeft':'90px'}} className='col'>
                <Link style={{'marginBottom':'10px'}} to="/sv-bank/register" className='row'>Create New User</Link>
            </div>
        </div>
        <button onClick={loginBtnFn}>Login</button>
        {navToCust && <Navigate replace to={props.getCustLink()}/>}
    </div>
  )
}
