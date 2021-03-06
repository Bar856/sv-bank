import React from 'react'
import AdminCustList from './AdminCustList'
import { Link } from 'react-router-dom'
export default function Admin(props) {
  return (
    <div className='container'>
        <h1>Manager</h1>
        {
            props.customers.map((cust,i)=>{
                return <AdminCustList key={i} deleteUser={props.deleteUser} deleteExpense={props.deleteExpense} customer={cust}/>
            })
        }
        <Link to={'/sv-bank'}><button className='margeTen'>Back To Home</button></Link>
    </div>
  )
}
