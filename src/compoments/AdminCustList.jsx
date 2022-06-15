import React from 'react';
import Expense from './Expense';
import { useState } from 'react';


export default function AdminCustList(props) {
  const [showActions, setShowActions] = useState(false)
  return (
    <div className='container' style={{'fontSize':'25px'}}>
      <div className='row'>
        <div className='col'>
          {props.customer.id}
        </div>
        <div className='col'>
          {props.customer.fullName}  
        </div>
        <div className='col' style={props.customer.id === '1' ? {'display':'none'} : {'display':'block'}}>
          <button className='margeTen' onClick={()=>{setShowActions(!showActions)}}>Actions</button>
        </div>
      </div>
      <div style={showActions ? {'display':'block'} : {'display':'none'}}>
        <div className='row'>
          {
            props.customer.expenses.map(ex=>{
              return <Expense custId={props.customer.id} deleteExpense={props.deleteExpense} expense={ex}/>
            })
          }
        </div>
        <div className='row'>
          <div className='col'>
            <button onClick={()=>props.deleteUser(props.customer.id)} className='redBg margeTen'>Delete User</button>
          </div>
        </div>
      </div>
    </div>
  )
}
