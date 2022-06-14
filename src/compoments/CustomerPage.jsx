import React from 'react';
import { useState } from 'react';
import {Link , useLocation} from 'react-router-dom'
export default function CustomerPage(props) {
  const [showAction, setShowAction] = useState(false);
  const [priceAction, setPriceAction] = useState(0);
  const [companyAction, setCompanyAction] = useState('');
  const addExpenseBtn = () =>{
    if (priceAction != 0 && companyAction != ''){
      props.addExpensesFn(priceAction,companyAction);
      alert("Action Added");
    }else{
      alert('Please Fill The Fields');
    }
  };

  return (
    <div className='container'>
      <h1>Welcome {props.customer.fullName}</h1>
      <div className='row'>
        <div className='col'>
          <button onClick={()=>alert(`Balance: ${props.customer.balance}$`)}>Balance</button>
        </div>
        <div className='col'>
          <button onClick={()=>{setShowAction(!showAction)}}>Action</button>
        </div>
      </div>
      <div className='row' style={showAction ? {'display':'block'} : {'display':'None'}}>
        <div className='col'>
          <input onChange={(e)=>{setPriceAction(e.target.value)}} type={'number'} placeholder='Price'></input>
          <input onChange={(e)=>{setCompanyAction(e.target.value)}} type={'text'} placeholder='Company'></input>
          <button onClick={addExpenseBtn}>Add Purches</button>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
        <Link to={'/sv-bank'}><button>Logout</button></Link>
        </div>
        <div className='col'>
          <Link to={'/sv-bank/edit'}><button>Edit</button></Link>
        </div>
      </div>
    </div>
  )
}
