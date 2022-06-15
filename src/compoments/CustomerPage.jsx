import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
export default function CustomerPage(props) {
  const [showAction, setShowAction] = useState(false);
  const [priceAction, setPriceAction] = useState(0);
  const [companyAction, setCompanyAction] = useState('');
  const addExpenseBtn = () =>{
    if (priceAction !== 0 && companyAction !== ''){
      props.addExpensesFn(priceAction,companyAction);
      alert("Action Added");
    }else{
      alert('Please Fill The Fields');
    }
  };

  return (
    <div className='container'>
      <h1>Hello {props.customer.fullName}</h1>
      <div className='row'>
        <div className='col'>
          <button className='margeTen heightBtns' onClick={()=>alert(`Balance: ${props.customer.balance}$`)}>Balance</button>
        </div>
        <div className='col'>
          <button className='margeTen heightBtns' onClick={()=>{setShowAction(!showAction)}}>Action</button>
        </div>
      </div>
      <div className='row' style={showAction ? {'display':'block'} : {'display':'None'}}>
        <div className='col'>
          <input className='margeTen' onChange={(e)=>{setPriceAction(e.target.value)}} type={'number'} placeholder='Price'></input>
          <input className='margeTen' onChange={(e)=>{setCompanyAction(e.target.value)}} type={'text'} placeholder='Company'></input>
          <button className='margeTen heightBtns' onClick={addExpenseBtn}>Add Purchase</button>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
        <Link to={'/sv-bank'}><button className='margeTen heightBtns'>Logout</button></Link>
        </div>
        <div className='col'>
          <Link to={'/sv-bank/edit'}><button className='margeTen heightBtns'>Edit</button></Link>
        </div>
      </div>
    </div>
  )
}
