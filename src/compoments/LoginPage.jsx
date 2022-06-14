import React from 'react';
import { useState } from 'react';
import {Navigate,Link} from "react-router-dom";
export default function LoginPage(props) {
    // const [checkedId, setCheckedId] = useState(true)
    const [navToCust, setnavToCust] = useState(false)
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    // const idClick = () =>{
    //     document.getElementById("CarNumInp").checked = false;
    //     setCheckedId(true);
    // }
    // const carNumClick = () =>{
    //     document.getElementById("idInp").checked = false;
    //     setCheckedId(false);
    // }
    // const handleChange = (e) =>{
    //     props.setCustomerLogIn(props.customers[e.target.value]);
    //     setnavToCust(true);
    // }
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
            <input type="text" onChange={(e)=>{setUserName(e.target.value)}} placeholder='User Name' />
        </div>
        <div className='row'>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
        </div>
        <div className='row'>
            <div className='col'>
                <Link to="/sv-bank/register" className='row'>Create New User</Link>
            </div>
        </div>
        <button onClick={loginBtnFn}>Login</button>
        {navToCust && <Navigate replace to={props.getCustLink()}/>}
    </div>
  )
}
